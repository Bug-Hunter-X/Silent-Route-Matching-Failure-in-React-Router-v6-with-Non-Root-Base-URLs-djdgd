```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 
```
This code uses the `BrowserRouter` component from `react-router-dom` v6. It might work but has an uncommon issue: if you have a base URL other than `/`, the routes will not match correctly causing navigation to fail silently.  This is because the base URL is not explicitly configured. 