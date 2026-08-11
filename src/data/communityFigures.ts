import type { PersonCardData } from "@/types/person";

import basriIskandar from "../../public/images/tokoh/basri-iskandar.png";
import carikDesa from "../../public/images/tokoh/carik-desa.png";
import eviCahya from "../../public/images/tokoh/evi-cahya-wulandari.png";
import hermanHidayat from "../../public/images/tokoh/herman-hidayat.png";
import jaelani from "../../public/images/tokoh/jaelani.png";
import maesaroh from "../../public/images/tokoh/maesaroh.png";
import mahmudi from "../../public/images/tokoh/mahmudi.png";
import mikah from "../../public/images/tokoh/mikah.png";
import rana from "../../public/images/tokoh/rana.png";
import ustMadrais from "../../public/images/tokoh/ust-madrais.png";

/**
 * Tokoh masyarakat yang didokumentasikan bersama warga Desa Tembong. Nama dan
 * jabatan mengikuti keterangan pada file foto; nama pribadi yang belum tersedia
 * tidak diterka atau ditambahkan.
 */
export const communityFigures: PersonCardData[] = [
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
