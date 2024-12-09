import type { AwesomeSinkDto } from "../../types/satisfactory/apis/dataTransferObject/awesomeSinkDto.type";
import type { AwesomeSinkFm } from "../../types/satisfactory/apis/frontModel/awesomeSinkFm.type";

export const awesomeSinkDtoToFmMapper = (
  dto: AwesomeSinkDto[],
): AwesomeSinkFm[] => {
  return dto.map((awesomeSinkDto) => ({
    couponNumber: awesomeSinkDto.NumCoupon,
    nextCouponsRemainingPoints: awesomeSinkDto.PointsToCoupon,
    progressionPercent: awesomeSinkDto.Percent,
    totalPoints: awesomeSinkDto.TotalPoints,
    graphPoints: awesomeSinkDto.GraphPoints ?? [],
  }));
};
