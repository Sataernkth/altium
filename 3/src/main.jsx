import React from 'react';
import { createRoot } from 'react-dom/client';
import LiquidEther from './LiquidEther.jsx';
import './LiquidEther.css';

createRoot(document.getElementById('liquid-root')).render(
  <LiquidEther colors={['#0c3848', '#69797c', '#c7ad9b']} mouseForce={20} cursorSize={100} persistence={0.75} autoDemo autoSpeed={0.5} autoIntensity={2.2} lightMode />
);
