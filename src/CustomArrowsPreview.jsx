



const CustomArrowsPreview = () => {
    const { handlePrevPage, currentPage, handleNextPage, totalPageCount } = useCarouselContext();
  
    const btnStyles= {
      position: 'absolute',
      top: '50%',
      border: 'none',
      background: 'cornflowerblue',
      padding: '14px',
      cursor: 'pointer',
    };
  
    console.log('currentPage', currentPage);
  
    return (
      <>
        <button style={{ ...btnStyles, left: 0 }} onClick={handlePrevPage} disabled={currentPage === 1}>
          prev
        </button>
        <button style={{ ...btnStyles, right: 0 }} onClick={handleNextPage} disabled={currentPage === totalPageCount}>
          next
        </button>
      </>
    );
  };


  export default CustomArrowsPreview
  