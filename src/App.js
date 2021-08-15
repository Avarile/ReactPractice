import React from "react"
import { Switch, Route } from "react-router"
import "./App.scss"
import HomePage from "./Components/HomePage"
import Shop from "./Pages/shop/shop"
import NotFound from "./Components/404notFound"
import Header from "./Components/Header/header"
import Footer from "./Components/Foot/Footer"
import SingleProduct from "./Components/SingleProduct/SingleProduct"

export default function App() {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/shop" component={Shop} />
                <Route path="/product/:id" component={SingleProduct} />
                <Route component={NotFound} />
            </Switch>
            <Footer />
        </>
    )
}
