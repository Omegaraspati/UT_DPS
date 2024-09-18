"use client";

import React, { useState } from "react";

const FormDaftar = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "Berkas Mahasiswa Non RPL/Alih Kredit",
    "Berkas Mahasiswa RPL/Alih Kredit",
    "Berkas Mahasiswa Khusus Guru",
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return (
          <div className="p-6 bg-blue-50 rounded-b-lg">
            <h3 className="text-lg font-semibold">PERSYARATAN UMUM:</h3>
            <ul className="list-decimal pl-4">
              <li>Scan Formulir Tanda Tangan (JPEG) maksimal 1 Mb.</li>
              <li>Scan Formulir Surat Keabsahan Dokumen dengan materai 10.000 (JPEG) maksimal 1 Mb.</li>
              <li>Softcopy pas foto formal (JPEG) maksimal 1 Mb.</li>
              <li>Scan KTP Asli (JPEG) maksimal 1 Mb.</li>
              <li>Scan Legalisir cap basah Ijazah terakhir (PDF) maksimal 1 Mb.</li>
            </ul>
            <p className="mt-2">
              Formulir bisa diunduh di <a href="https://ut.ac.id/formulir" className="text-blue-500 underline">ut.ac.id/formulir</a>.
            </p>
            <p className="mt-2">
              Semua dokumen tersebut diupload ke sia.ut.ac.id setelah mendaftar dan membayar admisi 100 ribu rupiah.
            </p>
          </div>
        );
      case 1:
        return <div className="p-6 bg-blue-50 rounded-b-lg">
            <h1 className="text-lg font-semibold ">Persyaratan Umum Non RPL ditambahan persyaratan khusus :</h1>
            <h3 className="text-lg font-semibold">Persyaratan Khusus</h3>
            <ul className="list-decimal pl-4">
            <li>Scan Fotocopy Transkrip nilai ijazah terakhir legalisir Basah</li>
            <li>Scan Ijazah asli SMA/Sederajat(jika pendidikan akhir bukan SMA/sederajat)</li>
            <li>Formulir daftar matakuliah yang diajukan RPL</li>
            <li>Formulir Deskripsi Matakuliah</li>
            <li>Screenshot Data diri asal pendidikan akhir di PDDikti</li>
            <li>Akreditasi Program Studi Asal</li>
            </ul>
            <p className="mt-2">
              Formulir bisa diunduh di <a href="https://ut.ac.id/formulir" className="text-blue-500 underline">ut.ac.id/formulir</a>.
            </p>
            <p className="mt-2">
              Semua dokumen tersebut diupload ke sia.ut.ac.id setelah mendaftar dan membayar admisi 400 ribu rupiah.
            </p>
        </div>;
      case 2:
        return <div className="p-6 bg-blue-50 rounded-b-lg">
            <h1 className="text-lg font-semibold ">SYARAT KHUSUS untuk Program Studi FKIP :</h1>
            <ul className="list-decimal pl-4">
            <li>Khusus Guru yang ingin mencari S1 PGSD/PGPAUD minimal mengajar 1 tahun di SD/TK/Paud</li>
            <li>Khusus Guru yang ingin mencari FKIP Non PGSD/PGPAUD minimal 1 tahun mengajar di sekolah setingkat SMP/SMA</li>
            <li>Surat pengangkatan sebagai guru kelas/bidang studi dari sekolah/yayasan/dinas terkait</li>
            <li>Surat keterangan mengajar yang menyatakan bahwa benar sudah mengajar minimal 1 tahun</li>
            </ul>
            <p className="mt-2">
              Formulir bisa diunduh di <a href="https://ut.ac.id/formulir" className="text-blue-500 underline">ut.ac.id/formulir</a>.
            </p>
        </div>;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-8 bg-cyan-50 ">
      <h1 className="text-2xl font-bold text-center text-blue-800">
        Persyaratan <span className="text-yellow-500">Mahasiswa Baru</span>
      </h1>
      
      <div className="mt-4 border-b border-gray-300">
        <ul className="flex justify-center space-x-4">
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={`cursor-pointer pb-2 ${
                activeTab === index
                  ? "border-b-4 border-blue-600 text-blue-600 font-semibold"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>

      <div>{renderContent()}</div>
    </div>
  );
};

export default FormDaftar;
