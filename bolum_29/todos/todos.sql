-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Anamakine: db
-- Üretim Zamanı: 25 Şub 2025, 14:35:07
-- Sunucu sürümü: 8.3.0
-- PHP Sürümü: 8.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `nextjs_egitim`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `todos`
--

CREATE TABLE `todos` (
  `td_id` bigint UNSIGNED NOT NULL,
  `td_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `td_status` tinyint DEFAULT '0' COMMENT '0 pasif 1 aktif',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `td_created_at` timestamp NULL DEFAULT NULL,
  `td_updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Tablo döküm verisi `todos`
--

INSERT INTO `todos` (`td_id`, `td_name`, `td_status`, `deleted_at`, `td_created_at`, `td_updated_at`) VALUES
(1, 'Ekmek Alınacak', 0, NULL, NULL, '2025-02-24 13:12:04'),
(2, 'Çöp Atılacak', 1, NULL, NULL, '2025-02-24 13:12:04'),
(3, 'Faturalar Ödenecek', 0, NULL, NULL, '2025-02-25 14:12:57'),
(4, 'Eğitim videosu çekilecek', 1, NULL, NULL, '2025-02-25 14:12:55'),
(12, 'Proje github üzerine eklenecek', 0, NULL, '2025-02-25 14:32:43', '2025-02-25 14:32:43'),
(13, 'Next.js yeni proje yapılacak', 0, NULL, '2025-02-25 14:33:06', '2025-02-25 14:33:06');

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `todos`
--
ALTER TABLE `todos`
  ADD PRIMARY KEY (`td_id`);

--
-- Dökümü yapılmış tablolar için AUTO_INCREMENT değeri
--

--
-- Tablo için AUTO_INCREMENT değeri `todos`
--
ALTER TABLE `todos`
  MODIFY `td_id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
