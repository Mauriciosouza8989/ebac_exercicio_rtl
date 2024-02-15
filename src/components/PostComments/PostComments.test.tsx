import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';
import modelComments from '../../models/Comment'

function addComment(comment: modelComments){
    fireEvent.change(screen.getByTestId('textarea'),{
        target: {
            value: comment.comment
        }
    });
    fireEvent.click(screen.getByTestId('btn-add-comment'))
    expect(screen.getByText('teste 1')).toBeInTheDocument()
}

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        const {debug} = render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
        addComment({ id: 1, comment: 'teste 1'})
        addComment({ id: 2, comment: 'teste 2'})
        debug()
    });
});