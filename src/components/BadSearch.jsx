import  { useState, useEffect } from 'react';
import './styles/badSearch.css';

const BadSearch = () => {
  const [showBadSearch, setShowBadSearch] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBadSearch(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (!showBadSearch) {
    return null;
  }

  return (
    <div className={`badSearchCard ${showBadSearch ? 'fadeIn' : 'fadeOut'}`}>
      <h1 className="messageBs">❌ Hey! You must provide an id from 1 to 126</h1>
    </div>
  );
}

export default BadSearch;
