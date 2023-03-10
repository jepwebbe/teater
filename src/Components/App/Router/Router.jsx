import React from "react";
import { Route, Routes } from "react-router-dom";
import { Actors } from "../../../Pages/Actors/Actors";
import ActorsDetails from "../../../Pages/Actors/ActorsDetails";
import { Events } from "../../../Pages/Events/Events";
import EventsDetails from "../../../Pages/Events/EventsDetails";
import Home from "../../../Pages/Home/Home";
import MyPage from "../../../Pages/MyPage/MyPage";
import { NotFound } from "../../../Pages/NotFound";
import ChooseOrder from "../../../Pages/Order/ChooseOrder";
import ConfirmOrder from "../../../Pages/Order/ConfirmOrder";
import Thanks from "../../../Pages/Order/Thanks";
import SearchResult from "../../../Pages/SearchResult";
// Defines the routes via the react-router-dom routing
const Router = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/events/:id" element={<EventsDetails />} />
      <Route path="/events/:id/bestil" element={<ChooseOrder />} />
      <Route path="/events/:id/godkend" element={<ConfirmOrder />} />
      <Route path="/events/:id/tak" element={<Thanks />} />
      <Route path="/skuespillere" element={<Actors />} />
      <Route path="/skuespillere/:id" element={<ActorsDetails />} />
      <Route path="/resultat" element={<SearchResult />} />
      <Route path="/minside" element={<MyPage />} />
      <Route path="/tak" element={<Thanks />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
