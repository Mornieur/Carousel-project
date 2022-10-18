import * as C from "./styles";

function Twitter() {
  return (
    <C.Container>
      <C.Card>
        <C.Avatar></C.Avatar>
        <C.Header>
          <strong>Escola Teste</strong>
          <span>@EscolaTeste</span>
          <time>20 h</time>
        </C.Header>
        <C.Description>
          Dia de Vestibulando na Escola!
        </C.Description>
        <C.Image />
        <C.Icons>
          <C.Status>
            <C.CommentIcon />
            18
          </C.Status>
          <C.Status>
            <C.RetweetIcon />
            18
          </C.Status>
          <C.Status>
            <C.LikeIcon />
            765
          </C.Status>
        </C.Icons>
        <C.Button>
          <button>Seguir</button>
        </C.Button>
      </C.Card>
    </C.Container>
  );
}

export default Twitter;
