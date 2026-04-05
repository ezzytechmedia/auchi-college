# Deploying ACA Schools to Render

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally
```bash
npm run dev
```
Visit `http://localhost:3000`

### 3. Deploy to Render (Free Tier)

#### Step A: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit: ACA Schools website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/aca-schools.git
git push -u origin main
```

#### Step B: Connect to Render
1. Go to [Render.com](https://render.com)
2. Sign up / Log in
3. Click "New +" → "Web Service"
4. Connect your GitHub repository
5. Fill in deployment settings:
   - **Name**: aca-schools
   - **Environment**: Node
   - **Build Command**: `npm run build`
   - **Start Command**: `npm start`
   - **Plan**: Free

#### Step C: Environment Variables (if needed)
- None required for MVP

#### Step D: Deploy
- Click "Deploy"
- Wait 3-5 minutes
- Your site will be live at `https://aca-schools.onrender.com`

## Features Included

✅ Cinematic Homepage  
✅ "From Ruins to Renaissance" Story Page  
✅ Facilities Showcase  
✅ Academics Program  
✅ Admissions Page  
✅ Alumni Network Platform  
✅ Gallery with Before/After  
✅ News & Updates  
✅ Mobile Responsive  
✅ Dark Theme + Gold Accents  
✅ Smooth Animations  

## File Structure

```
app/
  ├── page.js              (Homepage)
  ├── story/page.js        (Resurrection Story)
  ├── facilities/page.js   (Facilities Showcase)
  ├── academics/page.js    (Academic Programs)
  ├── admissions/page.js   (Application Portal)
  ├── alumni/page.js       (Alumni Network)
  ├── gallery/page.js      (Photos & Videos)
  ├── news/page.js         (News & Updates)
  └── layout.js            (Root Layout)

components/
  ├── Navbar.js            (Navigation)
  ├── Footer.js            (Footer)
  ├── StatCounter.js       (Animated Numbers)
  └── SectionHeader.js     (Section Headers)

styles/
  └── globals.css          (Tailwind + Custom CSS)

public/
  ├── images/              (Your screenshots)
  └── videos/              (Drone footage)
```

## Next Steps (Future Enhancements)

1. **Admin Dashboard**
   - Simple CMS for news updates
   - Image uploads
   - Event management

2. **Student Portal**
   - Results tracking
   - Assignment submission
   - Attendance visibility

3. **Alumni Directory**
   - Searchable database
   - Professional profiles
   - Networking features

4. **Database Integration**
   - PostgreSQL or Firebase
   - User authentication
   - Donation system (when ready)

## Troubleshooting

### Port 3000 Already in Use
```bash
npm run dev -- -p 3001
```

### Build Fails
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Images Not Showing
- Ensure images are in `public/images/`
- Update image paths in components

## Support & Contact

For questions or issues:
- Principal: Peter Omoh Dunia
- Email: info@acaschools.ng
- Website: https://aca-schools.onrender.com

---

**Proud to host Auchi College's Digital Monument.**

"From Ruins to Renaissance" 🚀
