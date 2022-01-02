import { Button } from "@chakra-ui/react";
import { url } from "inspector";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { SideBarClickItemProps } from "../types/layout.types";

function SideBarClickItem({ route, name, icon }: SideBarClickItemProps) {
  const router = useRouter();
  const [variants, setVariants] = useState("ghost");

  const compFunc = () => {
    if (router.isReady) {
      router.events.on("routeChangeComplete", (u, s) => {
        const chosenVariant = u === route ? "solid" : "ghost";
        if (
          u === route ||
          variants !== chosenVariant ||
          router.pathname == route
        ) {
          setVariants(chosenVariant);
        }
        // let chosenVariant = u == route ? "solid" : "ghost";
        // if (!(variants == chosenVariant)) {
        //   setVariants(chosenVariant);
        // }
      });
    }
  };
  useEffect(() => {
    let chosenVariant = router.pathname === route ? "solid" : "ghost";

    setVariants(chosenVariant);
  }, []); // setVariants(router.pathname == route ? "solid" : "ghost");

  useEffect(compFunc, [variants]); // setVariants(router.pathname == route ? "solid" : "ghost");
  //
  return (
    <Button
      className={`flex-col btn-hover md:flex-row md:space-x-1.5 text-3xl items-center sm:!w-full ${
        variants == "solid" ? "selected-item" : " diagonal-right"
      }`}
      onClick={() => router.push(encodeURI(route))}
      colorScheme={"teal"}
      variant={variants}
      rounded={"none"}
    >
      <div className="sm:hidden md:block text-2xl">{icon}</div>
      <h6 className="hidden sm:block font-semibold">{name}</h6>
    </Button>
  );
}

export default SideBarClickItem;
