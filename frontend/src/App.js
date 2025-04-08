import React from 'react';
import Navbar from './components/Navbar';
import DonationWidget from './components/DonationWidget';
import BlogPost from './components/BlogPost';
import Footer from './components/Footer';

const App = () => {
    return (
        <div>
            <Navbar />
            <main>
                <DonationWidget />
                {/* Example Blog Post */}
                <BlogPost title="Climate Change and You" content="Learn how climate change affects our planet." author="Dr. Lena Park" />
            </main>
            <Footer />
        </div>
    );
};

export default App;
