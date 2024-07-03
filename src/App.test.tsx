import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders the header', () => {
    render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
});

test('renders loading message initially', () => {
    render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
    const loadingElement = screen.getByRole('content');
    expect(loadingElement).toBeInTheDocument();
});
