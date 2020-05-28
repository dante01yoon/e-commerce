import { useEffect, MouseEvent,RefObject} from 'react';
 
export const useOutsider = <T extends HTMLElement>(ref: RefObject<T>,fn: () => void) => {
  useEffect(() => {
    function handleClick(event: CustomEvent<MouseEvent>) {
      if(ref.current && 
          event.target instanceof HTMLElement && 
            !ref.current.contains(event.target)){
        fn();
      }
    }
    document.addEventListener('mousedown', (handleClick) as EventListener); 
    return () => {
      document.removeEventListener('mousedown',(handleClick) as EventListener);
    }; 
  },[ref]);
}