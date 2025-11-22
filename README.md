# 🎮 Pokemon React App

A modern Pokemon application built with React and Vite, featuring a fast development environment with Hot Module Replacement (HMR) and ESLint for code quality. Search and explore your favorite Pokemon characters with detailed stats and information!

## 📸 Screenshots

### Application Interface
![Pokemon App Interface](https://github.com/Abhikanade17112002/Pokemon-React-App/blob/main/src/assets/screenshots/Home_Page.png)
*Search and browse Pokemon with detailed character cards showing stats, types, and abilities*

### Deployment
![AWS EC2 Instance](https://github.com/Abhikanade17112002/Pokemon-React-App/blob/main/src/assets/screenshots/Instance_Overview.png)
*Application deployed on AWS EC2 with proper security configurations*

![Security Groups](https://github.com/Abhikanade17112002/Pokemon-React-App/blob/main/src/assets/screenshots/Security_group_overview_exposing_Port5173.png)
*Configured inbound rules for secure access (HTTP, HTTPS, SSH, Custom TCP)*

## ✨ Features

- 🔍 **Search Functionality** - Search for your favorite Pokemon characters
- 🎴 **Pokemon Cards** - Beautiful card-based UI displaying:
  - Pokemon images and evolutions
  - Type information (Grass, Poison, Fire, etc.)
  - Detailed stats (Height, Weight, Speed, Experience, Attack)
  - Overgrow and Blaze abilities
- ⚡ Lightning-fast development with Vite
- 🔥 Hot Module Replacement (HMR) for instant updates
- 🎨 Modern React architecture
- 📱 Responsive design
- 🔍 ESLint integration for code quality
- ☁️ **AWS Deployment** - Deployed on EC2 with proper security groups

## 🚀 Deployment

### AWS EC2 Deployment

This application is deployed on AWS EC2 with the following configuration:

**Instance Details:**
- Instance ID: `i-0fcc083cab8d2e92e`
- Instance Type: `t3.micro`
- Public IPv4: `13.127.31.223`
- Instance Name: Pokemon-App-Server
- Region: Asia Pacific (Mumbai)

**Security Group Configuration:**
The application uses a launch-wizard security group with the following inbound rules:
- **Custom TCP** - Port 5173 (Vite dev server)
- **SSH** - Port 22 (Secure shell access)
- **HTTP** - Port 80 (Web traffic)
- **HTTPS** - Port 443 (Secure web traffic)

**Access URL:**
```
http://13.127.31.223
```
or
```
http://ec2-13-127-31-223.ap-south-1.compute.amazonaws.com
```

### Deployment Steps

1. Launch an EC2 instance (t3.micro or higher)
2. Configure security groups with required inbound rules
3. SSH into the instance:
```bash
ssh -i your-key.pem ec2-user@13.127.31.223
```
4. Install Node.js and npm
5. Clone the repository and install dependencies
6. Build and run the application

- **React** - A JavaScript library for building user interfaces
- **Vite** - Next Generation Frontend Tooling
- **ESLint** - Pluggable linting utility for JavaScript

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or higher)
- npm or yarn package manager

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Abhikanade17112002/Pokemon-React-App.git
```

2. Navigate to the project directory:
```bash
cd Pokemon-React-App
```

3. Install dependencies:
```bash
npm install
```
or
```bash
yarn install
```

### Running the Application

Start the development server:
```bash
npm run dev
```
or
```bash
yarn dev
```

The application will open at `http://localhost:5173` (Vite's default port).

### Building for Production

Create a production build:
```bash
npm run build
```
or
```bash
yarn build
```

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```
or
```bash
yarn preview
```

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code linting

## 🔧 Configuration

This project uses one of two official Vite plugins for React:

### [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react)
Uses Babel for Fast Refresh

### [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc)
Uses SWC for Fast Refresh

## 🎯 Application Features

### Pokemon Information Display
Each Pokemon card displays comprehensive information:
- **Visual**: Character artwork and evolution stages
- **Type**: Element classification (Grass, Poison, Fire, Water, etc.)
- **Stats**:
  - Height (in decimeters)
  - Weight (in hectograms)
  - Speed rating
  - Experience points
  - Attack power
- **Abilities**: Special abilities like Overgrow, Blaze, etc.

### Example Pokemon
- **Bulbasaur** - Grass/Poison type (Height: 7, Weight: 69, Speed: 45)
- **Ivysaur** - Grass/Poison type (Height: 10, Weight: 130, Speed: 60)
- **Venusaur** - Grass/Poison type (Height: 20, Weight: 1000, Speed: 80)
- **Charmander** - Fire type (Height: 6, Weight: 85, Speed: 65)

## 🎯 Future Enhancements

Consider these improvements for production applications:

- **TypeScript Integration**: Migrate to TypeScript for better type safety
  - Check out the [Vite TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts)
  - Enable type-aware lint rules with [typescript-eslint](https://typescript-eslint.io)

- **React Compiler**: Note that the React Compiler is not enabled by default due to its impact on dev & build performance. To add it, see the [React Compiler documentation](https://react.dev/learn/react-compiler/installation)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Abhikanade17112002**

- GitHub: [@Abhikanade17112002](https://github.com/Abhikanade17112002)

## 🙏 Acknowledgments

- Pokemon data and assets
- React community
- Vite team for the amazing build tool

---

Made with ❤️ and React
