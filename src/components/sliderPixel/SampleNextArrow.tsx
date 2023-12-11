/* eslint-disable max-len */
import React, { FC } from 'react';

interface ButtonProps {
  onClick: () => void;
}

export const SampleNextArrow = () => (
  <button
    aria-label="next slide"
    className="nextArrow"
    type="button"
  >
    <svg
      fill="none"
      height="24"
      viewBox="0 0 53 24"
      width="53"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5V10.5ZM52.0607 13.0607C52.6464 12.4749 52.6464 11.5251 52.0607 10.9393L42.5147 1.3934C41.9289 0.807611 40.9792 0.807611 40.3934 1.3934C39.8076 1.97919 39.8076 2.92893 40.3934 3.51472L48.8787 12L40.3934 20.4853C39.8076 21.0711 39.8076 22.0208 40.3934 22.6066C40.9792 23.1924 41.9289 23.1924 42.5147 22.6066L52.0607 13.0607ZM2 13.5H51V10.5H2V13.5Z" fill="white" id="Arrow 6" />
    </svg>
  </button>
);
