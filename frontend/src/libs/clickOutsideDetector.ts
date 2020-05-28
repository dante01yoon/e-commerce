import { useEffect, MouseEvent,RefObject} from 'react';
 
export const useOutsider = <T extends HTMLElement>(ref: RefObject<T>,fn: () => void) => {
  useEffect(() => {
    function handleClick(event: CustomEvent<MouseEvent>) {
      console.log(ref); 
      if(ref.current){
        console.log('ref exist');
      }
      if(ref.current && 
          event.target instanceof HTMLElement && 
            !ref.current.contains(event.target)){
        console.log('hello');
        fn();
      }
    }
    console.log('useOutsider function start');
    document.addEventListener('mousedown', (handleClick) as EventListener); 
    return () => {
      console.log('useOutsider function close');
      document.removeEventListener('mousedown',(handleClick) as EventListener);
    }; 
  },[ref]);
}