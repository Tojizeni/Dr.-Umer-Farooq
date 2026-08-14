import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion"; // Page transitions ke liye
import Navbar from "./Navbar";
import Footer from "./Footer";
import Disclaimer from "../shared/Disclaimer";

export default function PatientLayout() {
    const location = useLocation();

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />

            <main className="flex-grow">
                {/* AnimatePresence allows exit animations, motion.div handles enter/leave */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Outlet /> {/* Yahan Home, About wagaira render honge */}
                    </motion.div>
                </AnimatePresence>
            </main>

            <Disclaimer />
            <Footer />
        </div>
    );
}