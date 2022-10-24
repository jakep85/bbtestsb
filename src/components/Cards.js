import PropTypes from 'prop-types';

function Card({ type = 'sellable', panelExtension = 'none', handleButtonClick, handleMapClick }) {
  if (type === 'sellable' && panelExtension === 'none') {
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
  }
  if (type === 'sellable' && panelExtension === 'top') {
    return (
      <div className="bb-card bb-card--top-panel">
        <div className="bb-card__top-panel">
          <div className="bb-card__icon bb-card__icon--positive">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="#000000" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.5702 4.53906L9.16361 15.7511C8.90003 16.2165 9.00768 16.9807 9.16361 17.2517C9.31953 17.5228 9.75011 18.0035 10.2814 18.0035L19.738 18.0035L14.1976 26.2056L16.4331 28.4609L23.8365 17.2488C24.1 16.7835 23.9924 16.0193 23.8365 15.7482C23.6805 15.4771 23.2499 14.9964 22.7187 14.9964L13.2621 14.9965L18.8057 6.79436L16.5702 4.53906Z" />
            </svg>
          </div>
          <div className="bb-card__top-text">Fastest</div>
        </div>
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
  }
  if (type === 'sellable' && panelExtension === 'bottom') {
    return (
      <div className="bb-card bb-card--bottom-panel">
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
        <div className="bb-card__bottom-panel">
          {/* In the design the separator looks like needs to be either full width or centered with a gap on either side
              typicaly I've seen gaps on either side. Will respect the design and leave 'as-is' 
              TODO: ask UX about separator */}
          <div className="bb-card__bottom-item">
            <div className="bb-card__bottom-info">
              <div className="bb-card__bottom-text">Regular</div>
            </div>
            <div className="bb-card__bottom-action">
              <button className="bb-chip-blue-lg-subtle">
                <span>$45</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.3431 5.93457L15.7071 11.2285C16.0976 11.6191 16.0976 12.2522 15.7071 12.6427L10.3431 17.9346L9 16.5925L13.6569 11.9356L9 7.27878L10.3431 5.93457Z" />
                </svg>
              </button>
            </div>
          </div>
          {/* Few different ways to do a separator also, could use element here like <hr> or as CSS using a psuedo :after
              then would have to write :last-child for the :after display: none; */}
          <hr />
          <div className="bb-card__bottom-item">
            <div className="bb-card__bottom-info">
              <div className="bb-card__bottom-text">First-className</div>
              {/*  */}
              <div className="bb-card__icon bb-card__icon--positive">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.92599 3.478C9.43933 3.534 9.84999 3.625 10.158 3.751C10.4707 3.877 10.697 4.04267 10.837 4.248C10.977 4.45333 11.047 4.71 11.047 5.018C11.047 5.44267 10.8743 5.79733 10.529 6.082C10.1837 6.36667 9.72166 6.54867 9.14299 6.628V7.076C9.14299 7.12733 9.12433 7.17167 9.08699 7.209C9.04966 7.24633 9.00533 7.265 8.95399 7.265H8.01599C7.96466 7.265 7.92033 7.24633 7.88299 7.209C7.84566 7.17167 7.82699 7.12733 7.82699 7.076V6.628H6.16101V5.305H7.59601H8.51299C8.95633 5.305 9.17799 5.23733 9.17799 5.102C9.17799 5.046 9.14766 4.99933 9.08699 4.962C9.03099 4.92 8.92833 4.885 8.77899 4.857C8.63433 4.82433 8.41966 4.79167 8.13499 4.759C7.49566 4.68433 7.00566 4.52567 6.66499 4.283C6.32433 4.03567 6.15399 3.688 6.15399 3.24C6.15399 2.84333 6.30333 2.50733 6.60199 2.232C6.90066 1.952 7.30899 1.77 7.82699 1.686V1.189C7.82699 1.13767 7.84566 1.09333 7.88299 1.056C7.92033 1.01867 7.96466 1 8.01599 1H8.95399C9.00533 1 9.04966 1.01867 9.08699 1.056C9.12433 1.09333 9.14299 1.13767 9.14299 1.189V1.686H10.696V2.995H9.19103H8.48499C8.17233 2.995 8.01599 3.06033 8.01599 3.191C8.01599 3.261 8.07666 3.317 8.19799 3.359C8.31932 3.39633 8.56199 3.436 8.92599 3.478ZM8 8H10C10.5523 8 11 8.44772 11 9C11 9.55228 10.5523 10 10 10H7.33333L7 11H10.9998L13.0354 8.96447C13.4259 8.57394 14.059 8.57394 14.4496 8.96447L14.5355 9.05044C14.9261 9.44096 14.9261 10.0741 14.5355 10.4647L11 14.0002L10.9998 14H6H2V11L4.41421 8.58579C4.78929 8.21071 5.29799 8 5.82843 8H6H8Z"
                  />
                </svg>
              </div>
              <div className="bb-card__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.96115 6.60797C7.74453 5.52485 6.69088 4.82242 5.60776 5.03904C4.52464 5.25567 3.8222 6.30932 4.03883 7.39243L5.39572 14.1769C5.95663 16.9814 8.41912 19.0002 11.2792 19.0002H16C17.1046 19.0002 18 18.1048 18 17.0002C18 15.8956 17.1046 15.0002 16 15.0002H11.2792C10.3258 15.0002 9.50501 14.3273 9.31804 13.3924L7.96115 6.60797ZM13.6623 10.3191L12.637 12H11.0146L12.8017 9.37429L11.2197 7.01955H12.8347L13.6623 8.41481L14.49 7.01955H16.105L14.5266 9.37429L16.3137 12H14.6914L13.6623 10.3191ZM20.1003 10.7769V12H16.7715V7.01955H18.1521V10.7769H20.1003Z"
                  />
                </svg>
              </div>
              <div className="bb-card__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.5 4C4.94772 4 4.5 4.44772 4.5 5V10V11C4.5 12.4865 5.58114 13.7205 7 13.9585V18.5C7 19.3284 7.67157 20 8.5 20C9.32843 20 10 19.3284 10 18.5V13.9585C11.4189 13.7205 12.5 12.4865 12.5 11V10V5C12.5 4.44772 12.0523 4 11.5 4C10.9477 4 10.5 4.44772 10.5 5V10H9.5V5C9.5 4.44772 9.05228 4 8.5 4C7.94772 4 7.5 4.44772 7.5 5V10H6.5V5C6.5 4.44772 6.05228 4 5.5 4ZM15 8C15 5.79086 16.7909 4 19 4V14V18.5C19 19.3284 18.3284 20 17.5 20C16.6716 20 16 19.3284 16 18.5V17.1655C16 17.0554 16.0091 16.9454 16.0272 16.8367L16.5 14H15V8Z"
                  />
                </svg>
              </div>
            </div>
            <div className="bb-card__bottom-action">
              <button className="bb-chip-blue-lg-subtle">
                <span>$95</span>
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
  if (type === 'summary' && panelExtension === 'none') {
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
                  {/* Adding link here which would act as a button since this looks like an interactive element
                           and wouldn't just open a new tab with a google map link I'm guessing. Used the void to a-void :) 
                           page jump if used the "#". Added attribute role="button" for a11y */}
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
  if (type === 'summary' && panelExtension === 'top') {
    return (
      <div className="bb-card bb-card--top-panel">
        <div className="bb-card__top-panel">
          <div className="bb-card__icon bb-card__icon--positive">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="#000000" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.5702 4.53906L9.16361 15.7511C8.90003 16.2165 9.00768 16.9807 9.16361 17.2517C9.31953 17.5228 9.75011 18.0035 10.2814 18.0035L19.738 18.0035L14.1976 26.2056L16.4331 28.4609L23.8365 17.2488C24.1 16.7835 23.9924 16.0193 23.8365 15.7482C23.6805 15.4771 23.2499 14.9964 22.7187 14.9964L13.2621 14.9965L18.8057 6.79436L16.5702 4.53906Z" />
            </svg>
          </div>
          <div className="bb-card__top-text">Fastest</div>
        </div>
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
                  {/* Adding link here which would act as a button since this looks like an interactive element
                           and wouldn't just open a new tab with a google map link I'm guessing. Used the void to a-void :) 
                           page jump if used the "#". Added attribute role="button" for a11y */}
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
  if (type === 'summary' && panelExtension === 'bottom') {
    return (
      <div className="bb-card bb-card--bottom-panel">
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
                  {/* Adding link here which would act as a button since this looks like an interactive element
                           and wouldn't just open a new tab with a google map link I'm guessing. Used the void to a-void :) 
                           page jump if used the "#". Added attribute role="button" for a11y */}
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
        <div className="bb-card__bottom-panel">
          {/* In the design the separator looks like needs to be either full width or centered with a gap on either side
              typicaly I've seen gaps on either side. Will respect the design and leave 'as-is' 
              TODO: ask UX about separator */}
          <div className="bb-card__bottom-item">
            <div className="bb-card__bottom-info">
              <div className="bb-card__bottom-text">Regular</div>
            </div>
            <div className="bb-card__bottom-action">
              <button className="bb-chip-blue-lg-subtle">
                <span>$45</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.3431 5.93457L15.7071 11.2285C16.0976 11.6191 16.0976 12.2522 15.7071 12.6427L10.3431 17.9346L9 16.5925L13.6569 11.9356L9 7.27878L10.3431 5.93457Z" />
                </svg>
              </button>
            </div>
          </div>
          {/* Few different ways to do a separator also, could use element here like <hr> or as CSS using a psuedo :after
              then would have to write :last-child for the :after display: none; */}
          <hr />
          <div className="bb-card__bottom-item">
            <div className="bb-card__bottom-info">
              <div className="bb-card__bottom-text">First-className</div>
              {/*  */}
              <div className="bb-card__icon bb-card__icon--positive">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.92599 3.478C9.43933 3.534 9.84999 3.625 10.158 3.751C10.4707 3.877 10.697 4.04267 10.837 4.248C10.977 4.45333 11.047 4.71 11.047 5.018C11.047 5.44267 10.8743 5.79733 10.529 6.082C10.1837 6.36667 9.72166 6.54867 9.14299 6.628V7.076C9.14299 7.12733 9.12433 7.17167 9.08699 7.209C9.04966 7.24633 9.00533 7.265 8.95399 7.265H8.01599C7.96466 7.265 7.92033 7.24633 7.88299 7.209C7.84566 7.17167 7.82699 7.12733 7.82699 7.076V6.628H6.16101V5.305H7.59601H8.51299C8.95633 5.305 9.17799 5.23733 9.17799 5.102C9.17799 5.046 9.14766 4.99933 9.08699 4.962C9.03099 4.92 8.92833 4.885 8.77899 4.857C8.63433 4.82433 8.41966 4.79167 8.13499 4.759C7.49566 4.68433 7.00566 4.52567 6.66499 4.283C6.32433 4.03567 6.15399 3.688 6.15399 3.24C6.15399 2.84333 6.30333 2.50733 6.60199 2.232C6.90066 1.952 7.30899 1.77 7.82699 1.686V1.189C7.82699 1.13767 7.84566 1.09333 7.88299 1.056C7.92033 1.01867 7.96466 1 8.01599 1H8.95399C9.00533 1 9.04966 1.01867 9.08699 1.056C9.12433 1.09333 9.14299 1.13767 9.14299 1.189V1.686H10.696V2.995H9.19103H8.48499C8.17233 2.995 8.01599 3.06033 8.01599 3.191C8.01599 3.261 8.07666 3.317 8.19799 3.359C8.31932 3.39633 8.56199 3.436 8.92599 3.478ZM8 8H10C10.5523 8 11 8.44772 11 9C11 9.55228 10.5523 10 10 10H7.33333L7 11H10.9998L13.0354 8.96447C13.4259 8.57394 14.059 8.57394 14.4496 8.96447L14.5355 9.05044C14.9261 9.44096 14.9261 10.0741 14.5355 10.4647L11 14.0002L10.9998 14H6H2V11L4.41421 8.58579C4.78929 8.21071 5.29799 8 5.82843 8H6H8Z"
                  />
                </svg>
              </div>
              <div className="bb-card__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.96115 6.60797C7.74453 5.52485 6.69088 4.82242 5.60776 5.03904C4.52464 5.25567 3.8222 6.30932 4.03883 7.39243L5.39572 14.1769C5.95663 16.9814 8.41912 19.0002 11.2792 19.0002H16C17.1046 19.0002 18 18.1048 18 17.0002C18 15.8956 17.1046 15.0002 16 15.0002H11.2792C10.3258 15.0002 9.50501 14.3273 9.31804 13.3924L7.96115 6.60797ZM13.6623 10.3191L12.637 12H11.0146L12.8017 9.37429L11.2197 7.01955H12.8347L13.6623 8.41481L14.49 7.01955H16.105L14.5266 9.37429L16.3137 12H14.6914L13.6623 10.3191ZM20.1003 10.7769V12H16.7715V7.01955H18.1521V10.7769H20.1003Z"
                  />
                </svg>
              </div>
              <div className="bb-card__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.5 4C4.94772 4 4.5 4.44772 4.5 5V10V11C4.5 12.4865 5.58114 13.7205 7 13.9585V18.5C7 19.3284 7.67157 20 8.5 20C9.32843 20 10 19.3284 10 18.5V13.9585C11.4189 13.7205 12.5 12.4865 12.5 11V10V5C12.5 4.44772 12.0523 4 11.5 4C10.9477 4 10.5 4.44772 10.5 5V10H9.5V5C9.5 4.44772 9.05228 4 8.5 4C7.94772 4 7.5 4.44772 7.5 5V10H6.5V5C6.5 4.44772 6.05228 4 5.5 4ZM15 8C15 5.79086 16.7909 4 19 4V14V18.5C19 19.3284 18.3284 20 17.5 20C16.6716 20 16 19.3284 16 18.5V17.1655C16 17.0554 16.0091 16.9454 16.0272 16.8367L16.5 14H15V8Z"
                  />
                </svg>
              </div>
            </div>
            <div className="bb-card__bottom-action">
              <button className="bb-chip-blue-lg-subtle">
                <span>$95</span>
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
