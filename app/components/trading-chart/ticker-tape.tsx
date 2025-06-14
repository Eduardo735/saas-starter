'use client';

import React, { useEffect, useRef } from 'react';

type TickerTapeProps = {
    symbols?: { description?: string; proName: string }[];
    colorTheme?: 'light' | 'dark';
    isTransparent?: boolean;
};

export const TickerTapeWidget: React.FC<TickerTapeProps> = ({
    symbols = [
        { proName: 'NASDAQ:TSLA' },
        { proName: 'NASDAQ:AAPL' },
        { proName: 'NASDAQ:MSFT' },
    ],
    colorTheme = 'light',
    isTransparent = false,
}) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Limpiar contenido previo
        containerRef.current.innerHTML = '';

        // Crear contenedor div requerido
        const widgetContainer = document.createElement('div');
        widgetContainer.className = 'tradingview-widget-container';

        const widgetDiv = document.createElement('div');
        widgetDiv.className = 'tradingview-widget-container__widget';
        widgetContainer.appendChild(widgetDiv);

        // Crear script
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
        script.async = true;

        // Insertar configuración JSON como texto dentro del script
        script.innerHTML = JSON.stringify({
            symbols,
            showSymbolLogo: true,
            colorTheme,
            isTransparent,
            displayMode: 'adaptive',
            locale: 'en',
        });

        widgetContainer.appendChild(script);
        containerRef.current.appendChild(widgetContainer);

        return () => {
            // Limpia al desmontar
            containerRef.current?.removeChild(widgetContainer);
        };
    }, [symbols, colorTheme, isTransparent]);

    return <nav id="ticker-tape" ref={containerRef} style={{ maxWidth: '100%', margin: 'auto', borderRadius: 8, overflow: 'hidden' }} />;
};
