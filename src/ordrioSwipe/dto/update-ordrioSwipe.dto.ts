import { PartialType } from '@nestjs/swagger';
import { CreateOrdrioSwipeDto } from './create-ordrioSwipe.dto';

export class UpdateOrdrioSwipeDto extends PartialType(CreateOrdrioSwipeDto) {}
