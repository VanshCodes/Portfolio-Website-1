import { Button } from "@chakra-ui/react";
import { url } from "inspector";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { SideBarClickItemProps } from "../types/layout";

function SideBarClickItem({ route, name, icon }: SideBarClickItemProps) {
  const router = useRouter();
  const [variants, setVariants] = useState("");
  const compFunc = () => {
    if (router.isReady) {
      router.events.on("routeChangeComplete", (u) => {
        const chosenVariant = u === route ? "solid" : "ghost";

        if (u === route || variants !== chosenVariant) {
          if (!(variants == chosenVariant)) {
            setVariants(chosenVariant);
          }
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

  useEffect(compFunc, [router.pathname]); // setVariants(router.pathname == route ? "solid" : "ghost");
  //
  return (
    <Button
      className="flex text-3xl items-center "
      onClick={() => router.push(encodeURI(route))}
      colorScheme={"blue"}
      variant={variants}
      rounded={"none"}
    >
      <div className="lg:hidden">{icon}</div>
      <h6 className="hidden lg:block font-semibold">{name}</h6>
    </Button>
  );
}

export default SideBarClickItem;
