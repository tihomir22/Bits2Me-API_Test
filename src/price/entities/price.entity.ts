import { ApiProperty } from '@nestjs/swagger';

export class Price {
  @ApiProperty({
    example: 'Bitcoin',
    description: 'El nombre de la criptomoneda',
  })
  coinName: string;
  @ApiProperty({ example: 40000, description: 'El precio de la criptomoneda' })
  coinPrice: number;
}
