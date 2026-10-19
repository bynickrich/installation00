import halo2Cover from "@/ui/halo-2/cover.jpg";
import halo3ODSTCover from "@/ui/halo-3-odst/cover.jpg";
import halo3Cover from "@/ui/halo-3/cover.jpg";
import halo4Cover from "@/ui/halo-4/cover.jpg";
import halo5Cover from "@/ui/halo-5/cover.jpg";
import haloCECover from "@/ui/halo-ce/cover.jpg";
import haloInfiniteCover from "@/ui/halo-infinite/cover.jpg";
import haloReachCover from "@/ui/halo-reach/cover.jpg";

export const GAMES = [
  {
    slug: "halo-ce",
    title: "Halo: Combat Evolved",
    developer: "Bungie",
    releaseYear: 2001,
    cover: haloCECover,
    available: false,
  },
  {
    slug: "halo-2",
    title: "Halo 2",
    developer: "Bungie",
    releaseYear: 2004,
    cover: halo2Cover,
    available: false,
  },
  {
    slug: "halo-3",
    title: "Halo 3",
    developer: "Bungie",
    releaseYear: 2007,
    cover: halo3Cover,
    available: false,
  },
  {
    slug: "halo-3-odst",
    title: "Halo 3: ODST",
    developer: "Bungie",
    releaseYear: 2009,
    cover: halo3ODSTCover,
    available: false,
  },
  {
    slug: "halo-reach",
    title: "Halo: Reach",
    developer: "Bungie",
    releaseYear: 2010,
    cover: haloReachCover,
    available: false,
  },
  {
    slug: "halo-4",
    title: "Halo 4",
    developer: "343 Industries",
    releaseYear: 2012,
    cover: halo4Cover,
    available: false,
  },
  {
    slug: "halo-5",
    title: "Halo 5: Guardians",
    developer: "343 Industries",
    releaseYear: 2015,
    cover: halo5Cover,
    available: false,
  },
  {
    slug: "halo-infinite",
    title: "Halo Infinite",
    developer: "343 Industries",
    releaseYear: 2021,
    cover: haloInfiniteCover,
    available: true,
  },
];
