import './footer.scss';

const Footer = () => {
  return (
    <footer className='page-footer blue-grey lighten-4'>
      <div className='container'>
        <div className='row'>
          <div className='col l6 s12'>
            <h5 className='blue-grey-text text-darken-5'>That`s all Folks</h5>
            <p className='blue-grey-text text-darken-5'>
              Made by S.McArrow just for fun
            </p>
          </div>
        </div>
      </div>
      <div className='footer-copyright'>
        <div className='container blue-grey-text text-darken-5'>
          © {new Date().getFullYear()} All rights reserved
        </div>
      </div>
    </footer>
  );
};

export { Footer };
