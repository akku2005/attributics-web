const Block = ({
    children,
    height = '100vh',
    background,
    xpad = '',
  }) => {

    const isMobile = window.innerWidth < 1024;
    if (isMobile) {
        if (xpad != '') {
            xpad = '5%';
        }
    }

    return (
      <div
        style={{
          width: '100%',
          height,
          paddingLeft: xpad,
          paddingRight: xpad,
          backgroundColor: background,
        }}
      >
        {children}
      </div>
    );
  };
  
  export default Block;
  