import PropTypes from 'prop-types';
import { Container, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <Container>
            {options.map((option, index) => {
                return (
                    <Button
                        type="button"
                        key={index}
                        name={option}
                        onClick={onLeaveFeedback}
                    >
                        {option}
                    </Button>
                )
            })}
        </Container>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}