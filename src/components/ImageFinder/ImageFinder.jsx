import { useState, useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { searchImages } from 'shared/services/image-api';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Loader from 'shared/components/Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

import css from './ImageFinder.module.css';

export function ImageFinder() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    if (!search) {
      return;
    }
    const fetchPictures = async () => {
      try {
        setLoading(true);

        const hits = await searchImages(search, page);

        if (hits.length === 0) {
          toast.error('Sorry, there are no available images.');
        }
        setPictures(prevPictures => [...prevPictures, ...hits]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPictures();
  }, [search, page]);

  const searchPictures = query => {
    if (query === search) {
      toast.warn('This is the same query!');
      return;
    }
    setSearch(query);
    setPictures([]);
    setPage(1);
  };

  const showPicture = img => {
    setCurrentImage(img);
  };

  const closeModal = () => {
    setCurrentImage(null);
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      <Searchbar onSubmit={searchPictures} />

      {error && <p className={css.errorMassage}>{error}</p>}
      {loading && <Loader />}
      {ImageGallery && (
        <ImageGallery pictures={pictures} showPicture={showPicture} />
      )}
      <div className={css.btn}>
        {Boolean(pictures.length) && !loading && <Button loadMore={loadMore} />}
      </div>
      {currentImage && (
        <Modal currentImage={currentImage} closeModal={closeModal} />
      )}
      <ToastContainer />
    </div>
  );
}

// export class ImageFinder extends Component {
//   state = {
//     search: '',
//     page: 1,
//     pictures: [],
//     loading: false,
//     error: null,
//     currentImage: null,
//     status: 'idle',
//   };

//   componentDidUpdate(prevProps, prevState) {
//     // const prevSearchValue = prevProps.search;
//     // const nextSearchValue = this.state.search;
//     const { search, page } = this.state;
//     if (prevState.search !== search || prevState.page !== page) {
//       this.fetchPictures();
//     }
//   }

//   async fetchPictures() {
//     try {
//       this.setState({ loading: true });
//       const { search, page } = this.state;

//       const hits = await searchImages(search, page);

//       if (hits.length === 0) {
//         toast.error('Sorry, there are no available images.');
//       }

//       this.setState(({ pictures }) => ({
//         pictures: [...pictures, ...hits],
//       }));
//     } catch (error) {
//       this.setState({ error: error.message, pictures: [] });
//     } finally {
//       this.setState({ loading: false });
//     }
//   }

//   searchPictures = ({ search }) => {
//     if (search === this.state.search) {
//       toast.error('This is the same query!');
//       return;
//     }

//     this.setState({ search, pictures: [], page: 1 });
//   };

//   showPicture = img => {
//     this.setState({
//       currentImage: img,
//     });
//   };

//   closeModal = () => {
//     this.setState({ currentImage: null });
//   };

//   loadMore = () => {
//     this.setState(({ page }) => ({ page: page + 1 }));
//   };

//   render() {
//     const { loading, error, pictures, currentImage } = this.state;
//     const { searchPictures, loadMore, showPicture, closeModal } = this;

//     return (
//       <>
//         {/* <div className={css.App}> */}
//         <Searchbar onSubmit={searchPictures} />
//         {error && <p>{error}</p>}
//         {loading && <Loader />}
//         {ImageGallery && (
//           <ImageGallery pictures={pictures} showPicture={showPicture} />
//         )}
//         <div className={css.btn}>
//           {Boolean(pictures.length) && !loading && (
//             <Button loadMore={loadMore} />
//           )}
//         </div>
//         {currentImage && (
//           <Modal currentImage={currentImage} closeModal={closeModal} />
//         )}
//         <ToastContainer />
//         {/* </div> */}
//       </>
//     );
//   }
// }
