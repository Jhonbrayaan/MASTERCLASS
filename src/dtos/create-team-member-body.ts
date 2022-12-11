import {IsNotEmpty} from 'class-validator';

class = CreateTeamMemberBody {
  @notNullable()
  @Length(5, 100)
  name: string;

  @notNullable({
    message: 'the member function should not be empty'
  })
  function: string;
}