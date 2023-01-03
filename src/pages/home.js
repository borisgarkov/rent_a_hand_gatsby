import * as React from "react";
import MainLayout from "../components/NavigationBar/MainLayout";
import FeedSection from '../components/Home/FeedSection';

export default function Home(props) {
    return (
        <MainLayout>
            <FeedSection />
        </MainLayout>
    )
}