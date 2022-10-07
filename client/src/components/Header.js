import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const listHeader = ["vegetables", "cheeses", "fruits"];

  return (
    <div className="py-4">
      <div className="container mx-auto">
        <div className="flex flex-row">
          {listHeader.map((item) => {
            return (
              <Link to={`/${item}`} key={item}>
                <div className="px-4">
                  <p className="text-white capitalize">{item}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
