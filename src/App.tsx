import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from "@/components/ui/sonner";
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import OrdersPageWrapper from './pages/OrdersPageWrapper';
// Removed App.css import which was causing the container constraint

function App() {
  return (
    <Router>
      <div className="w-full h-full">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/orders" element={<OrdersPageWrapper />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;