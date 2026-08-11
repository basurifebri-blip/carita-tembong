import type { PersonCardData } from "@/types/person";

import adangKosasih from "../../public/images/pemerintahan/adang-kosasih.png";
import adlah from "../../public/images/pemerintahan/adlah.png";
import amat from "../../public/images/tokoh/amat.png";
import basriIskandar from "../../public/images/tokoh/basri-iskandar.png";
import carikDesa from "../../public/images/tokoh/carik-desa.png";
import eviCahya from "../../public/images/tokoh/evi-cahya-wulandari.png";
import hermanHidayat from "../../public/images/tokoh/herman-hidayat.png";
import jaelani from "../../public/images/tokoh/jaelani.png";
import maesaroh from "../../public/images/tokoh/maesaroh.png";
import mahmudi from "../../public/images/tokoh/mahmudi.png";
import mikah from "../../public/images/tokoh/mikah.png";
import rana from "../../public/images/tokoh/rana.png";
import sahari from "../../public/images/tokoh/sahari.png";
import ustMadrais from "../../public/images/tokoh/ust-madrais.png";

/**
 * Tokoh masyarakat yang didokumentasikan bersama warga Desa Tembong. Nama dan
 * jabatan mengikuti keterangan pada file foto; nama pribadi yang belum tersedia
 * tidak diterka atau ditambahkan.
 */
export type CommunityFigureGroup = {
  eyebrow: string;
  title: string;
  description: string;
  figures: PersonCardData[];
};

const villageLeadership: PersonCardData[] = [
  {
    name: "Adang Kosasih, S.Pd",
    role: "Kepala Desa",
    study: "Pemerintah Desa Tembong",
    image: adangKosasih,
    alt: "Foto resmi Adang Kosasih, S.Pd, Kepala Desa Tembong.",
  },
  {
    name: "Herman Hidayat, S.Pd.",
    role: "Sekretaris Desa",
    study: "Pemerintah Desa Tembong",
    image: hermanHidayat,
    alt: "Potret Herman Hidayat, S.Pd., Sekretaris Desa Tembong.",
  },
  {
    name: "Carik Desa Tembong",
    role: "Carik",
    study: "Pemerintah Desa Tembong",
    image: carikDesa,
    alt: "Potret Carik Desa Tembong.",
  },
  {
    name: "Adlah, S.Pd",
    role: "Ketua TP PKK",
    study: "Desa Tembong",
    image: adlah,
    alt: "Foto resmi Adlah, S.Pd, Ketua Tim Penggerak PKK Desa Tembong.",
  },
];

const regionalLeadership: PersonCardData[] = [
  {
    name: "Jaelani",
    role: "Kepala Dusun 1",
    study: "Kp. Salabarang RT 002/RW 001",
    image: jaelani,
    alt: "Potret Jaelani, Kepala Dusun 1 Desa Tembong.",
  },
  {
    name: "Ust. Madrais, S.Ag.",
    role: "Kepala Dusun 2",
    study: "Desa Tembong",
    image: ustMadrais,
    alt: "Potret Ustaz Madrais, S.Ag., Kepala Dusun 2 Desa Tembong.",
  },
  {
    name: "Rana",
    role: "Ketua RW 001",
    study: "Kp. Salabarang",
    image: rana,
    alt: "Potret Rana, Ketua RW 001 Kampung Salabarang.",
  },
  {
    name: "Amat",
    role: "Ketua RW 002",
    study: "Kp. Kadu Kokosan",
    image: amat,
    alt: "Potret Amat, Ketua RW 002 Kampung Kadu Kokosan.",
  },
  {
    name: "Sahari",
    role: "Ketua RW 003",
    study: "Kp. Galaya",
    image: sahari,
    alt: "Potret Sahari, Ketua RW 003 Kampung Galaya.",
  },
];

const communityServices: PersonCardData[] = [
  {
    name: "Maesaroh",
    role: "Ketua BUMDes",
    study: "Desa Tembong",
    image: maesaroh,
    alt: "Potret Maesaroh, Ketua BUMDes Desa Tembong.",
  },
  {
    name: "Evi Cahya Wulandari, S.Keb., Bdn.",
    role: "Bidan Desa",
    study: "Desa Tembong",
    image: eviCahya,
    alt: "Potret Evi Cahya Wulandari, S.Keb., Bdn., Bidan Desa Tembong.",
  },
  {
    name: "Mahmudi, S.Kep., Ners.",
    role: "Kepala Puskesmas Kecamatan Carita",
    study: "Puskesmas Carita",
    image: mahmudi,
    alt: "Potret Mahmudi, S.Kep., Ners., Kepala Puskesmas Kecamatan Carita.",
  },
  {
    name: "Mikah",
    role: "Kelompok Pengrajin",
    study: "Kp. Salabarang RT 002/RW 001",
    image: mikah,
    alt: "Potret Mikah dari kelompok pengrajin Kampung Salabarang.",
  },
  {
    name: "Basri Iskandar (Alek)",
    role: "Ketua Silat Cibinong",
    study: "Desa Tembong",
    image: basriIskandar,
    alt: "Potret Basri Iskandar atau Alek, Ketua Silat Cibinong.",
  },
];

export const communityFigureGroups: CommunityFigureGroup[] = [
  {
    eyebrow: "Pemerintahan Desa",
    title: "Pimpinan & Penggerak Desa",
    description:
      "Tokoh yang memimpin pelayanan, administrasi, dan gerakan keluarga di Desa Tembong.",
    figures: villageLeadership,
  },
  {
    eyebrow: "Kewilayahan",
    title: "Dusun & Rukun Warga",
    description:
      "Pengurus wilayah yang menjadi penghubung terdekat antara warga dan pemerintah desa.",
    figures: regionalLeadership,
  },
  {
    eyebrow: "Pelayanan & Kemandirian",
    title: "Kesehatan, Ekonomi & Tradisi",
    description:
      "Penggerak layanan kesehatan, ekonomi warga, keterampilan lokal, dan warisan budaya Tembong.",
    figures: communityServices,
  },
];
