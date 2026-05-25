# 🌿 GKMS Karnataka — AgroMet Weather Forecast App

> **Block-level 5-day weather forecast system for Karnataka districts**
> Powered by IMD-MoES • GKMS AgroMet Field Unit

[![GitHub Pages](https://img.shields.io/badge/Live_Demo-GitHub_Pages-blue?style=flat-square)](https://Amith1994.github.io/GKMS_Karnataka/)
[![License](https://img.shields.io/badge/License-Internal-orange?style=flat-square)]()

---

## 📋 Overview

This web application displays **5-day block-level weather forecasts** for all **31 districts** and **189 taluks/blocks** of Karnataka, India. Built for the GKMS (Gramin Krishi Mausam Seva) AgroMet Field Unit under IMD-MoES.

### Features

| Feature | Description |
|---------|-------------|
| 🔍 **Pincode Search** | Look up weather by pincode or district name |
| 📍 **District → Taluk Browser** | Browse all 31 districts, select taluk for detailed 5-day forecast |
| 🗺️ **Interactive Map** | Full-screen Leaflet-based map with per-district weather markers |
| 📊 **IMD-Style Tables** | Transposed weather tables with rainfall, temp, humidity, wind, cloud cover |
| 🌧️ **Smart 404 Page** | Fuzzy-matched district suggestions when a search fails |
| ⚡ **Smooth Animations** | Loading shimmer, fade-in transitions, tab animations |
| 🔐 **Admin Portal** | Password-protected Excel upload to update weather data |

---

## 🚀 Quick Start

### View the App
Open **[`1st_updated.html`](1st_updated.html)** in any modern browser — no server required!

Or visit the live site: **https://Amith1994.github.io/GKMS_Karnataka/1st_updated.html**

### Pages

| Page | Purpose |
|------|---------|
| `1st_updated.html` | Main weather forecast app |
| `index.html` | Full-screen interactive map dashboard |
| `admin.html` | Admin portal for data updates |

---

## 📊 How to Update Weather Data

### Step 1: Prepare Your Excel File

The app accepts the standard **IMD Karnataka block-level weather forecast** Excel file (`.xls` or `.xlsx`).

**Required columns:**

| Column | Header | Description |
|--------|--------|-------------|
| A | Issue Date | Excel date serial |
| B | Forecast Date | Excel date serial |
| G | DIST_NAME | District name (e.g., `KOLAR`) |
| I | BLOCK_NAME | Block/taluk name (e.g., `KGF`) |
| J | Rainfall(mm) | Rainfall in millimeters |
| K | TempMax(deg C) | Maximum temperature |
| L | TempMin(deg C) | Minimum temperature |
| M | HumidityI(%) | Max relative humidity |
| N | HumidityII(%) | Min relative humidity |
| O | WindSpeed(kmph) | Wind speed in km/h |
| P | WindDirection(deg) | Wind direction in degrees |
| Q | CloudCover(octa) | Cloud cover (0-8 scale) |
| R | Warning(If Any) | Weather warnings |

### Step 2: Upload via Admin Portal

1. Open **[`admin.html`](admin.html)**
2. Enter the admin password: `GKMS2026`
3. Click the upload zone or drag & drop your Excel file
4. Review the preview (districts count, blocks, date range)
5. Click **"Generate Updated Page"**
6. A new `1st_updated.html` file will download

### Step 3: Deploy the Update

**Option A — Direct file replacement:**
1. Replace the old `1st_updated.html` with the downloaded file
2. Push to GitHub (see below)

**Option B — Git commands:**
```bash
# Navigate to the project folder
cd GKMS_Karnataka

# Copy the downloaded file (replace path as needed)
copy "Downloads\1st_updated.html" .

# Push to GitHub
git add 1st_updated.html
git commit -m "Updated weather data for DD/MM/YYYY"
git push
```

---

## 🔧 GitHub Setup (First Time)

### 1. Clone the Repository
```bash
git clone https://github.com/Amith1994/GKMS_Karnataka.git
cd GKMS_Karnataka
```

### 2. Configure Git (if not already done)
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### 3. Push Updates
```bash
git add .
git commit -m "Your update message"
git push origin main
```

### 4. GitHub Pages
The site is hosted automatically via GitHub Pages at:
**https://Amith1994.github.io/GKMS_Karnataka/**

---

## 🏗️ Tech Stack

- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Map**: Leaflet.js with CartoDB dark basemap
- **Excel Parsing**: SheetJS (xlsx.js) via CDN
- **Fonts**: Google Fonts (Cormorant Garamond, IBM Plex Mono, Inter)
- **Hosting**: GitHub Pages (static)

---

## 👥 Project Team — KSNUAHS, Shivamogga

| Name | Role | Unit |
|------|------|------|
| **Dr. S. Sridhara** | Director of Research & Principal Nodal Officer | KSNUAHS |
| **Dr. Kumar Naik A. H.** | Nodal Officer | AMFU Hiriyur |
| **Dr. Amith G** | Tech. Officer | AMFU Hiriyur |
| **Dr. Mahesh Haroli** | Tech. Officer | AMFU Navile |
| **Mr. Praveen K. M** | Tech. Officer | AMFU Brahmavar |

---

## 📄 License

Internal project — GKMS AgroMet Field Unit • IMD-MoES Sponsored

---

*Last updated: May 2026*
