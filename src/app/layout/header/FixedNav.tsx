'use client';
import React, { useEffect, useRef } from 'react';
import { useIntersection, useWindowScroll } from 'react-use';
import { MainNav } from './MainNav';
import { HeaderLayout } from './HeaderLayout';

export default function FixedNav() {
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });
  const { y } = useWindowScroll();
  const lastScrollY = useRef(y);

  useEffect(() => {
    lastScrollY.current = y;
  }, [y]);

  const isVisible = intersection && intersection.isIntersecting;
  const delta = y - lastScrollY.current < 0 && !isVisible;

  return (
    <>
      <div className="fixed top-0 left-10">
        <div>
          {isVisible && <div>Header Is Visible</div>}      
          {delta && 'Scrolling up'}
          <p>{lastScrollY.current}</p>
          <p> {y - lastScrollY.current}</p>
        </div>
        
      </div>
      <div className="flex flex-col">
        <HeaderLayout />
        <MainNav />

        <div className="flex justify-center items-center w-100">
          <div
            className={`flex z-10 transition-all ${delta ? 'fixed top-0  opacity-90' : 'hidden'} duration-400 bg-white w-100`}
          >
            <MainNav />
          </div>
        </div>
      </div>
      <div className="">
        <div ref={intersectionRef} id="PlaceMenuIfVisible"></div>
      </div>
    </>
  );
}
