```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  console.log('Location:', location);
  return (
    <BrowserRouter basename="/my-app"> {/* Add basename prop here */}
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
This solution adds the `basename` prop to the `<BrowserRouter>` component.  The value of `basename` should match the base URL path where your application is deployed.  In this example it is set to `/my-app`.  If your application is deployed at the root, you do not need the `basename` prop.