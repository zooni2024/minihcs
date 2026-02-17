'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const ANIMAL_DATA = {
    'mini-cow': {
        name: 'Mini Highland Cow',
        spacePerUnit: 0.75, // acres
        spaceUnit: 'acres',
        costPerUnit: 75, // USD
        waterPerUnit: 10, // gallons/day
        description: 'Friendly, fluffy, and perfect for smaller acreage.'
    },
    'standard-cow': {
        name: 'Standard Cattle',
        spacePerUnit: 2, // acres
        spaceUnit: 'acres',
        costPerUnit: 150, // USD
        waterPerUnit: 30, // gallons/day
        description: 'Traditional beef or dairy breeds requiring more land.'
    },
    'chicken': {
        name: 'Chicken / Rooster',
        spacePerUnit: 10, // sq ft
        spaceUnit: 'sq ft',
        costPerUnit: 8, // USD
        waterPerUnit: 0.5, // units (simplified)
        description: 'Easy to manage and great for pest control.'
    },
    'goat': {
        name: 'Goat / Sheep',
        spacePerUnit: 0.2, // acres
        spaceUnit: 'acres',
        costPerUnit: 30, // USD
        waterPerUnit: 3, // gallons/day
        description: 'Excellent for clearing brush and varied terrain.'
    }
};

export default function HomesteadCalculator() {
    const [selections, setSelections] = useState<{ [key: string]: number }>({
        'mini-cow': 0,
        'standard-cow': 0,
        'chicken': 0,
        'goat': 0
    });

    const updateQuantity = (key: string, val: number) => {
        setSelections(prev => ({ ...prev, [key]: Math.max(0, val) }));
    };

    const totalAcreage = Object.keys(selections).reduce((acc, key) => {
        const item = ANIMAL_DATA[key as keyof typeof ANIMAL_DATA];
        if (item.spaceUnit === 'acres') {
            return acc + (selections[key] * item.spacePerUnit);
        } else {
            // convert sq ft to acres (1 acre = 43560 sq ft)
            return acc + ((selections[key] * item.spacePerUnit) / 43560);
        }
    }, 0);

    const totalCost = Object.keys(selections).reduce((acc, key) => {
        return acc + (selections[key] * ANIMAL_DATA[key as keyof typeof ANIMAL_DATA].costPerUnit);
    }, 0);

    const totalWater = Object.keys(selections).reduce((acc, key) => {
        return acc + (selections[key] * ANIMAL_DATA[key as keyof typeof ANIMAL_DATA].waterPerUnit);
    }, 0);

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#f0f4f0' }}>
            <Header />
            <main style={{ flex: 1, padding: '4rem 1rem' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h1 style={{ fontSize: '3rem', color: '#1b5e20', fontWeight: '800', marginBottom: '1rem' }}>Homestead Planner Tool</h1>
                        <p style={{ fontSize: '1.2rem', color: '#555', maxWidth: '700px', margin: '0 auto' }}>
                            Planning your dream farm? Use our interactive calculator to estimate the land, water, and monthly budget required for your animals.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '2rem', alignItems: 'start' }}>

                        {/* LEFT: Inputs */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {Object.entries(ANIMAL_DATA).map(([key, animal]) => (
                                <div key={key} style={{
                                    background: 'white',
                                    padding: '1.5rem',
                                    borderRadius: '16px',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}>
                                    <div style={{ flex: 1 }}>
                                        <h3 style={{ margin: 0, color: '#333', fontSize: '1.25rem' }}>{animal.name}</h3>
                                        <p style={{ margin: '5px 0 0', color: '#666', fontSize: '0.9rem' }}>{animal.description}</p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <button
                                            onClick={() => updateQuantity(key, selections[key] - 1)}
                                            style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid #e0e0e0', background: 'white', cursor: 'pointer', fontSize: '1.2rem' }}
                                        >-</button>
                                        <input
                                            type="number"
                                            value={selections[key]}
                                            onChange={(e) => updateQuantity(key, parseInt(e.target.value) || 0)}
                                            style={{ width: '60px', padding: '8px', textAlign: 'center', borderRadius: '8px', border: '2px solid #43a047', fontWeight: 'bold' }}
                                        />
                                        <button
                                            onClick={() => updateQuantity(key, selections[key] + 1)}
                                            style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#43a047', color: 'white', border: 'none', cursor: 'pointer', fontSize: '1.2rem' }}
                                        >+</button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* RIGHT: Summary Stick */}
                        <div style={{
                            background: '#1b5e20',
                            color: 'white',
                            padding: '2rem',
                            borderRadius: '24px',
                            position: 'sticky',
                            top: '2rem',
                            boxShadow: '0 20px 40px rgba(27, 94, 32, 0.3)'
                        }}>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '1rem' }}>Estimation Results</h2>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ fontSize: '0.9rem', opacity: 0.8, display: 'block' }}>Minimum Land Needed</label>
                                <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>{totalAcreage.toFixed(2)} Acres</span>
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ fontSize: '0.9rem', opacity: 0.8, display: 'block' }}>Est. Monthly Maintenance</label>
                                <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>${totalCost.toLocaleString()}</span>
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <label style={{ fontSize: '0.9rem', opacity: 0.8, display: 'block' }}>Daily Water Usage</label>
                                <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>{totalWater.toFixed(1)} Gallons</span>
                            </div>

                            <p style={{ fontSize: '0.8rem', opacity: 0.7, fontStyle: 'italic', marginBottom: '2rem' }}>
                                *Calculations are based on conservative averages. Local climate and breed specifics may vary.
                            </p>

                            <Link href="/contact" style={{
                                display: 'block',
                                background: '#43a047',
                                color: 'white',
                                textDecoration: 'none',
                                textAlign: 'center',
                                padding: '1rem',
                                borderRadius: '12px',
                                fontWeight: 'bold',
                                transition: 'background 0.3s'
                            }} onMouseOver={(e) => e.currentTarget.style.background = '#2e7d32'} onMouseOut={(e) => e.currentTarget.style.background = '#43a047'}>
                                Get Professional Advice
                            </Link>

                        </div>
                    </div>

                    {/* Shareable Section */}
                    <div style={{ marginTop: '4rem', background: 'white', padding: '2rem', borderRadius: '16px', textAlign: 'center', border: '2px dashed #43a047' }}>
                        <h3 style={{ color: '#1b5e20' }}>Love this tool? Share it with fellow farmers!</h3>
                        <p>High-quality tools like this help the community grow. Feel free to link to this page from your blog or social media.</p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
                            <button style={{ padding: '8px 20px', borderRadius: '20px', border: '1px solid #ddd', background: '#f5f5f5', cursor: 'not-allowed' }}>Twitter</button>
                            <button style={{ padding: '8px 20px', borderRadius: '20px', border: '1px solid #ddd', background: '#f5f5f5', cursor: 'not-allowed' }}>Facebook</button>
                            <button style={{ padding: '8px 20px', borderRadius: '20px', border: '1px solid #ddd', background: '#f5f5f5', cursor: 'not-allowed' }}>Copy Link</button>
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
}
