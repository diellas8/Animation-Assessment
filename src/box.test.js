import { render } from '@testing-library/react';
import Boxs from './Boxs';

describe('Boxs component', () => {
    it('renders all boxes with the correct content', () => {
        const boxes = [
            {
                iconClassName: '...',
                title: 'Box 1',
                body: ['Body content'],
                icon: () => <div />,
                boxHoverClassName: '...',
            },
            {
                iconClassName: '...',
                title: 'Box 2',
                body: ['Body content', 'More body content'],
                icon: () => <div />,
                boxHoverClassName: '...',
            },
        ];
        const { getByText } = render(<Boxs boxes={boxes} />);

        // Assert that all boxes are rendered
        expect(getByText('Box 1')).toBeInTheDocument();
        expect(getByText('Box 2')).toBeInTheDocument();

        // Assert that the body content is rendered for each box
        expect(getByText('Body content')).toBeInTheDocument();
        expect(getByText('More body content')).toBeInTheDocument();
    });
});
