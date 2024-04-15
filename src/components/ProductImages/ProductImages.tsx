"use client";
import { useScreenMatcher } from "@/hooks/useScreenMatcher";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";

interface ProductImagesProps {
  images: string[];
}

const ProductImages = ({ images = [] }: ProductImagesProps) => {
  const { smMatch, mdMatch } = useScreenMatcher();

  const createRowsDisposition = (mdMatch: boolean, index: number) => {
    if (mdMatch) {
      return index % 2 === 0 ? 2 : 1;
    }

    return 1;
  };

  let imageListCols = 1;

  if (smMatch) {
    imageListCols = 2;
  }

  if (mdMatch) {
    imageListCols = 3;
  }

  return (
    <ImageList cols={imageListCols} variant="quilted" gap={16} rowHeight={150} sx={{ justifyItems: "center" }}>
      {images
        .filter((_, index) => index < 4)
        .map((image, index) => (
          <ImageListItem
            key={index}
            cols={1}
            rows={createRowsDisposition(mdMatch, index)}
            sx={{
              position: "relative",
              overflow: "hidden",
              width: "220px",
              height: "280px",
            }}
          >
            <Image
              src={image}
              alt="product image"
              fill
              priority
              style={{ objectFit: "cover", borderRadius: "0.5rem" }}
            />
          </ImageListItem>
        ))}
    </ImageList>
  );
};

export default ProductImages;
