import PropTypes from 'prop-types';

function Card({ type = 'sellable', panelExtension = 'none', handleButtonClick, handleMapClick }) {
  if (type === 'sellable') {
    return (
      <div className="bb-card">
        <div className="bb-card__inner">
          <div className="bb-card__header">
            <div className="bb-card__logo">
              <img src="logo.png" alt="Greyhound Logo" width="101" height="24" />
            </div>
            <div className="bb-card__features">
              <div className="bb-card__features-item">
                <div className="bb-card__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.4098 17.5858C11.1909 16.8047 12.4572 16.8047 13.2382 17.5858L11.824 19L10.4098 17.5858ZM7.58138 14.7574C9.92453 12.4142 13.7235 12.4142 16.0667 14.7574L14.6524 16.1716C13.0904 14.6095 10.5577 14.6095 8.99559 16.1716L7.58138 14.7574ZM4.75295 11.9289C8.6582 8.02369 14.9898 8.02369 18.8951 11.9289L17.4809 13.3431C14.3567 10.219 9.29136 10.219 6.16717 13.3431L4.75295 11.9289ZM2 9.17598C2.02486 9.15075 2.04983 9.12559 2.07491 9.1005C7.51717 3.65825 16.3253 3.63328 21.7984 9.02559L20.3842 10.4399C15.6921 5.82856 8.15033 5.85352 3.48913 10.5147C3.46404 10.5398 3.43908 10.565 3.41426 10.5902L2 9.17598Z"
                    />
                  </svg>
                </div>
              </div>
              <div className="bb-card__features-item">
                <div className="bb-card__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.5 6C9.5 7.10457 8.60457 8 7.5 8C6.39543 8 5.5 7.10457 5.5 6C5.5 4.89543 6.39543 4 7.5 4C8.60457 4 9.5 4.89543 9.5 6ZM6 9C4.89543 9 4 9.89543 4 11V15C4 15.5523 4.44772 16 5 16H6V19C6 19.5523 6.44772 20 7 20H8C8.55228 20 9 19.5523 9 19V16H10C10.5523 16 11 15.5523 11 15V11C11 9.89543 10.1046 9 9 9H6ZM18.5 6C18.5 7.10457 17.6046 8 16.5 8C15.3955 8 14.5 7.10457 14.5 6C14.5 4.89543 15.3955 4 16.5 4C17.6046 4 18.5 4.89543 18.5 6ZM16.3188 9C15.5188 9 14.7957 9.47679 14.4805 10.2122L12.5974 14.6061C12.3146 15.2659 12.7987 16 13.5166 16H15V19C15 19.5523 15.4478 20 16 20H17C17.5523 20 18 19.5523 18 19V16H19.4835C20.2014 16 20.6854 15.2659 20.4026 14.6061L18.5195 10.2122C18.2044 9.47679 17.4813 9 16.6812 9H16.3188Z"
                    />
                  </svg>
                </div>
              </div>
              <div className="bb-card__features-item">
                <div className="bb-card__icon bb-card__icon--positive">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4 4H4.75H10.75H11.5V4.75V10.75V11.5H10.75H4.75H4V10.75V4.75V4ZM5.5 5.5V10H10V5.5H5.5ZM6.5 6.5H9V9H6.5V6.5ZM4 12.5H4.75H10.75H11.5V13.25V19.25V20H10.75H4.75H4V19.25V13.25V12.5ZM5.5 14V18.5H10V14H5.5ZM6.5 15H9V17.5H6.5V15ZM13.25 4H12.5V4.75V10.75V11.5H13.25H19.25H20V10.75V4.75V4H19.25H13.25ZM14 10V5.5H18.5V10H14ZM17.5 6.5H15V9H17.5V6.5ZM20 18.5V12.5H18.5V15H15V12.5H12.5V15H15V18.5H12.5V20H18.5H20V18.5ZM18.5 17H17V18.5H18.5V17Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="bb-card__body">
            <div className="bb-card__journey">
              <div className="bb-card__journey-start">
                <div className="bb-card__journey-details">
                  <div className="bb-card__journey-time">8:00am</div>
                  <div className="bb-card__journey-station">Port Authority</div>
                  <div className="bb-card__journey-city">New York City</div>
                  <div className="bb-card__journey-map">
                    <a href="javascript:void(0)" role="button" onClick={handleMapClick}>
                      Map
                    </a>
                  </div>
                </div>
              </div>
              <div className="bb-card__icon bb-card__icon--divider">
                <svg width="36" height="20" viewBox="0 0 36 20" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M30.3431 4L35.7071 9.29396C36.0976 9.68448 36.0976 10.3176 35.7071 10.7082L30.3431 16L29 14.6579L32.66 11.0011H18V9.00107H32.66L29 5.34421L30.3431 4ZM2 9H0V11H2V9ZM4 9H8V11H4V9ZM16 9H10V11H16V9Z"
                  />
                </svg>
              </div>
              <div className="bb-card__journey-end">
                <div className="bb-card__journey-details">
                  <div className="bb-card__journey-time">12:30pm</div>
                  <div className="bb-card__journey-station">Union Station</div>
                  <div className="bb-card__journey-city">Washington</div>
                  <div className="bb-card__journey-map">
                    <a href="javascript:void(0)" role="button" onClick={handleMapClick}>
                      Map
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bb-card__footer">
            <div className="bb-card__details">
              <div className="bb-card__details-item">
                <div className="bb-card__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7 3C5.34315 3 4 4.34315 4 6V20C4 20.5523 4.44772 21 5 21H6C6.55228 21 7 20.5523 7 20H17C17 20.5523 17.4477 21 18 21H19C19.5523 21 20 20.5523 20 20V6C20 4.34315 18.6569 3 17 3H7ZM7 6C6.44772 6 6 6.44772 6 7V13C6 13.5523 6.44643 14 6.99871 14H12H17.0013C17.5536 14 18 13.5523 18 13V7C18 6.44772 17.5523 6 17 6H7ZM8 17C8 17.5523 7.55228 18 7 18C6.44772 18 6 17.5523 6 17C6 16.4477 6.44772 16 7 16C7.55228 16 8 16.4477 8 17ZM17 18C17.5523 18 18 17.5523 18 17C18 16.4477 17.5523 16 17 16C16.4477 16 16 16.4477 16 17C16 17.5523 16.4477 18 17 18Z"
                    />
                  </svg>
                </div>
                <div className="bb-card__details-label">Bus</div>
              </div>
              <div className="bb-card__details-item">
                <div className="bb-card__icon">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 27C22.0751 27 27 22.0751 27 16C27 9.92487 22.0751 5 16 5C9.92487 5 5 9.92487 5 16C5 22.0751 9.92487 27 16 27ZM14.5 9.5C14.5 8.67157 15.1716 8 16 8C16.8284 8 17.5 8.67157 17.5 9.5V14.6351L21.9479 17.2031C22.6654 17.6173 22.9112 18.5347 22.497 19.2522C22.0828 19.9696 21.1654 20.2154 20.4479 19.8012L15.2518 16.8012C15.0544 16.6872 14.8926 16.5351 14.7706 16.3596C14.6001 16.1162 14.5 15.8198 14.5 15.5V9.5Z"
                    />
                  </svg>
                </div>
                <div className="bb-card__details-label">4h 30m</div>
              </div>
            </div>
            <div className="bb-card__action">
              <button className="bb-chip-blue-lg-default" onClick={handleButtonClick}>
                <span>$45</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.3431 5.93457L15.7071 11.2285C16.0976 11.6191 16.0976 12.2522 15.7071 12.6427L10.3431 17.9346L9 16.5925L13.6569 11.9356L9 7.27878L10.3431 5.93457Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (type === 'summary') {
    return (
      <div className="bb-card">
        <div className="bb-card__inner">
          <div className="bb-card__header">
            <div className="bb-card__logo">
              <img src="logo.png" alt="Greyhound Logo" width="101" height="24" />
            </div>
            <div className="bb-card__features">
              <div className="bb-card__features-item">
                <div className="bb-card__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.4098 17.5858C11.1909 16.8047 12.4572 16.8047 13.2382 17.5858L11.824 19L10.4098 17.5858ZM7.58138 14.7574C9.92453 12.4142 13.7235 12.4142 16.0667 14.7574L14.6524 16.1716C13.0904 14.6095 10.5577 14.6095 8.99559 16.1716L7.58138 14.7574ZM4.75295 11.9289C8.6582 8.02369 14.9898 8.02369 18.8951 11.9289L17.4809 13.3431C14.3567 10.219 9.29136 10.219 6.16717 13.3431L4.75295 11.9289ZM2 9.17598C2.02486 9.15075 2.04983 9.12559 2.07491 9.1005C7.51717 3.65825 16.3253 3.63328 21.7984 9.02559L20.3842 10.4399C15.6921 5.82856 8.15033 5.85352 3.48913 10.5147C3.46404 10.5398 3.43908 10.565 3.41426 10.5902L2 9.17598Z"
                    />
                  </svg>
                </div>
              </div>
              <div className="bb-card__features-item">
                <div className="bb-card__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.5 6C9.5 7.10457 8.60457 8 7.5 8C6.39543 8 5.5 7.10457 5.5 6C5.5 4.89543 6.39543 4 7.5 4C8.60457 4 9.5 4.89543 9.5 6ZM6 9C4.89543 9 4 9.89543 4 11V15C4 15.5523 4.44772 16 5 16H6V19C6 19.5523 6.44772 20 7 20H8C8.55228 20 9 19.5523 9 19V16H10C10.5523 16 11 15.5523 11 15V11C11 9.89543 10.1046 9 9 9H6ZM18.5 6C18.5 7.10457 17.6046 8 16.5 8C15.3955 8 14.5 7.10457 14.5 6C14.5 4.89543 15.3955 4 16.5 4C17.6046 4 18.5 4.89543 18.5 6ZM16.3188 9C15.5188 9 14.7957 9.47679 14.4805 10.2122L12.5974 14.6061C12.3146 15.2659 12.7987 16 13.5166 16H15V19C15 19.5523 15.4478 20 16 20H17C17.5523 20 18 19.5523 18 19V16H19.4835C20.2014 16 20.6854 15.2659 20.4026 14.6061L18.5195 10.2122C18.2044 9.47679 17.4813 9 16.6812 9H16.3188Z"
                    />
                  </svg>
                </div>
              </div>
              <div className="bb-card__features-item">
                <div className="bb-card__icon bb-card__icon--positive">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4 4H4.75H10.75H11.5V4.75V10.75V11.5H10.75H4.75H4V10.75V4.75V4ZM5.5 5.5V10H10V5.5H5.5ZM6.5 6.5H9V9H6.5V6.5ZM4 12.5H4.75H10.75H11.5V13.25V19.25V20H10.75H4.75H4V19.25V13.25V12.5ZM5.5 14V18.5H10V14H5.5ZM6.5 15H9V17.5H6.5V15ZM13.25 4H12.5V4.75V10.75V11.5H13.25H19.25H20V10.75V4.75V4H19.25H13.25ZM14 10V5.5H18.5V10H14ZM17.5 6.5H15V9H17.5V6.5ZM20 18.5V12.5H18.5V15H15V12.5H12.5V15H15V18.5H12.5V20H18.5H20V18.5ZM18.5 17H17V18.5H18.5V17Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="bb-card__body">
            <div className="bb-card__journey">
              <div className="bb-card__journey-start">
                <div className="bb-card__journey-details">
                  <div className="bb-card__journey-time">8:00am</div>
                  <div className="bb-card__journey-date">Wed, Jul 28</div>
                  <div className="bb-card__journey-station">Port Authority</div>
                  <div className="bb-card__journey-city">New York City</div>
                  <div className="bb-card__journey-map">
                    <a href="javascript:void(0)" role="button">
                      Map
                    </a>
                  </div>
                </div>
              </div>
              <div className="bb-card__icon bb-card__icon--divider">
                <svg width="36" height="20" viewBox="0 0 36 20" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M30.3431 4L35.7071 9.29396C36.0976 9.68448 36.0976 10.3176 35.7071 10.7082L30.3431 16L29 14.6579L32.66 11.0011H18V9.00107H32.66L29 5.34421L30.3431 4ZM2 9H0V11H2V9ZM4 9H8V11H4V9ZM16 9H10V11H16V9Z"
                  />
                </svg>
              </div>
              <div className="bb-card__journey-end">
                <div className="bb-card__journey-details">
                  <div className="bb-card__journey-time">12:30pm</div>
                  <div className="bb-card__journey-date">Fri, Jul 30</div>
                  <div className="bb-card__journey-station">Union Station</div>
                  <div className="bb-card__journey-city">Washington</div>
                  <div className="bb-card__journey-map">
                    <a href="javascript:void(0)" role="button">
                      Map
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bb-card__footer">
            <div className="bb-card__details">
              <div className="bb-card__details-item">
                <div className="bb-card__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7 3C5.34315 3 4 4.34315 4 6V20C4 20.5523 4.44772 21 5 21H6C6.55228 21 7 20.5523 7 20H17C17 20.5523 17.4477 21 18 21H19C19.5523 21 20 20.5523 20 20V6C20 4.34315 18.6569 3 17 3H7ZM7 6C6.44772 6 6 6.44772 6 7V13C6 13.5523 6.44643 14 6.99871 14H12H17.0013C17.5536 14 18 13.5523 18 13V7C18 6.44772 17.5523 6 17 6H7ZM8 17C8 17.5523 7.55228 18 7 18C6.44772 18 6 17.5523 6 17C6 16.4477 6.44772 16 7 16C7.55228 16 8 16.4477 8 17ZM17 18C17.5523 18 18 17.5523 18 17C18 16.4477 17.5523 16 17 16C16.4477 16 16 16.4477 16 17C16 17.5523 16.4477 18 17 18Z"
                    />
                  </svg>
                </div>
                <div className="bb-card__details-label">Bus</div>
              </div>
              <div className="bb-card__details-item">
                <div className="bb-card__icon">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 27C22.0751 27 27 22.0751 27 16C27 9.92487 22.0751 5 16 5C9.92487 5 5 9.92487 5 16C5 22.0751 9.92487 27 16 27ZM14.5 9.5C14.5 8.67157 15.1716 8 16 8C16.8284 8 17.5 8.67157 17.5 9.5V14.6351L21.9479 17.2031C22.6654 17.6173 22.9112 18.5347 22.497 19.2522C22.0828 19.9696 21.1654 20.2154 20.4479 19.8012L15.2518 16.8012C15.0544 16.6872 14.8926 16.5351 14.7706 16.3596C14.6001 16.1162 14.5 15.8198 14.5 15.5V9.5Z"
                    />
                  </svg>
                </div>
                <div className="bb-card__details-label">4h 30m</div>
              </div>
              <div className="bb-card__details-item">
                <div className="bb-card__icon">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 10.5C16 12.9853 13.9853 15 11.5 15C9.01472 15 7 12.9853 7 10.5C7 8.01472 9.01472 6 11.5 6C13.9853 6 16 8.01472 16 10.5ZM3 23.6C3 20.5072 5.50721 18 8.6 18H14.4C17.4928 18 20 20.5072 20 23.6C20 24.3732 19.3732 25 18.6 25H4.4C3.6268 25 3 24.3732 3 23.6ZM22.5 17C24.433 17 26 15.433 26 13.5C26 11.567 24.433 10 22.5 10C20.567 10 19 11.567 19 13.5C19 15.433 20.567 17 22.5 17ZM23 20C22.5804 20 22.1759 20.0646 21.7959 20.1844C22.0506 20.7244 22.2473 21.295 22.378 21.8904L23.0608 25H27C27.5523 25 28 24.5523 28 24C28 21.7909 26.2091 20 24 20H23Z"
                    />
                  </svg>
                </div>
                <div className="bb-card__details-label">2</div>
              </div>
            </div>
            <div className="bb-card__action">
              <button className="bb-chip-neutral-lg-subtle">
                <span>$45</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.3431 5.93457L15.7071 11.2285C16.0976 11.6191 16.0976 12.2522 15.7071 12.6427L10.3431 17.9346L9 16.5925L13.6569 11.9356L9 7.27878L10.3431 5.93457Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  type: PropTypes.oneOf(['sellable', 'summary']),
  panelExtension: PropTypes.oneOf(['none', 'top', 'bottom']),
  handleButtonClick: PropTypes.func,
  handleMapClick: PropTypes.func,
};

export default Card;
