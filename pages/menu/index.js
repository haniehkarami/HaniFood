// isr pages

import MenuPage from "@/component/templates/MenuPage";
import React from "react";

function Menu({data}) {
  return (
    <div>
      <MenuPage data={data} />
    </div>
  );
}

export default Menu;

export async function getStaticProps() {
  const res = await fetch(`${process.env.BASE_URL}/data`);
  const data = await res.json();
  console.log(data);
  
  return {
    props: {data},
    revalidate: +process.env.REVALIDATE, 
  };
}
