import { render, screen } from '@testing-library/react-native';
import Card from './Card';

describe('Card component renders with', () => {
  test('custom header and body text', () => {
    const headerText = 'Header text';
    const bodyText = 'Body text';

    render(<Card header={headerText} body={bodyText} />);
    const headerElement = screen.getByText(headerText);
    const bodyElement = screen.getByText(bodyText);

    expect(headerElement.props.children).toBe(headerText);
    expect(bodyElement).toBeTruthy();
  });

  test('custom body text and style with no header', () => {
    const bodyText = 'Custom body text';
    const customStyle = { fontSize: 20, color: 'blue' };

    render(<Card body={bodyText} bodyStyle={customStyle} />);
    const bodyElement = screen.getByText(bodyText);
    const cardContainerElement = bodyElement.parent;

    expect(bodyElement.props.children).toBe(bodyText);
    expect(bodyElement).toHaveStyle(customStyle);
    expect(cardContainerElement.children.length).toBe(1);
  });

  test('custom header text and style with no body', () => {
    const headerText = 'Custom header text';
    const customStyle = { fontSize: 30, color: 'green' };

    render(<Card header={headerText} headerStyle={customStyle} />);
    const headerElement = screen.getByText(headerText);
    const cardContainerElement = headerElement.parent;

    expect(headerElement.props.children).toBe(headerText);
    expect(headerElement).toHaveStyle(customStyle);
    expect(cardContainerElement.children.length).toBe(1);
  });

  test('no header or body text', () => {
    render(<Card />);
    const allTextComponents = screen.queryAllByText(/.*/);

    expect(allTextComponents.length).toBe(0);
  });
});
