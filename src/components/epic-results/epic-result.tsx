import React, { FC } from "react";
import { Boundary } from "../ui/boundary";

interface IProps {
  formResult: Object;
}

export const EpicResult: FC<IProps> = ({ formResult }) => {
  const { data } = formResult;

  return (
    <div className="mt-12">
      <Boundary labels={["Result"]}>
        {data ? (
          <div className="overflow-x-auto shadow-md rounded-lg">
            <table className="min-w-full bg-white border-collapse">
              <thead className="bg-gray-300">
                <tr>
                  <th className="p-1 text-left text-xs font-medium text-black uppercase tracking-wider border border-gray-200">
                    S.NO.
                  </th>
                  <th className="p-1 text-left text-xs font-medium text-black uppercase tracking-wider border border-gray-200">
                    Epic Number
                  </th>
                  <th className="p-1 text-left text-xs font-medium text-black uppercase tracking-wider border border-gray-200">
                    Name
                  </th>
                  <th className="p-1 text-left text-xs font-medium text-black uppercase tracking-wider border border-gray-200">
                    Age
                  </th>
                  <th className="p-1 text-left text-xs font-medium text-black uppercase tracking-wider border border-gray-200">
                    Relative Name
                  </th>
                  <th className="p-1 text-left text-xs font-medium text-black uppercase tracking-wider border border-gray-200">
                    State
                  </th>
                  <th className="p-1 text-left text-xs font-medium text-black uppercase tracking-wider border border-gray-200">
                    District
                  </th>
                  <th className="p-1 text-left text-xs font-medium text-black uppercase tracking-wider border border-gray-200">
                    Assembly Constituency
                  </th>
                  <th className="p-1 text-left text-xs font-medium text-black uppercase tracking-wider border border-gray-200">
                    Part
                  </th>
                  <th className="p-1 text-left text-xs font-medium text-black uppercase tracking-wider border border-gray-200">
                    Polling Station
                  </th>
                  <th className="p-1 text-left text-xs font-medium text-black uppercase tracking-wider border border-gray-200">
                    Part Serial Number
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="p-1 text-xs text-black border border-gray-200">
                    1
                  </td>
                  <td className="p-1 text-xs font-mono text-black border border-gray-200">
                    {data?.epicNumber}
                  </td>
                  <td className="p-1 border border-gray-200">
                    <div className="text-xs text-black">{data?.fullName}</div>
                    <div className="text-xs text-black">{data?.fullNameL1}</div>
                  </td>
                  <td className="p-1 text-xs text-black border border-gray-200">
                    {data?.age}
                  </td>
                  <td className="p-1 border border-gray-200">
                    <div className="text-xs text-black">
                      {data?.relativeFullName}
                    </div>
                    <div className="text-xs text-black">
                      {data?.relativeFullNameL1}
                    </div>
                  </td>
                  <td className="p-1 border border-gray-200">
                    <div className="text-xs text-black">{data?.stateName}</div>
                    <div className="text-xs text-black">
                      {data?.stateNameL1}
                    </div>
                  </td>
                  <td className="p-1 border border-gray-200">
                    <div className="text-xs text-black">
                      {data?.districtValue?.trim()}
                    </div>
                    <div className="text-xs text-black">
                      {data?.districtValueL1}
                    </div>
                  </td>
                  <td className="p-1 border border-gray-200">
                    <div className="text-xs text-black">
                      {data?.acNumber}-{data?.asmblyName}
                    </div>
                    <div className="text-xs text-black">
                      {data?.asmblyNameL1}
                    </div>
                  </td>
                  <td className="p-1 border border-gray-200">
                    <div className="text-xs text-black">
                      {data?.partNumber}-{data?.partName}
                    </div>
                    <div className="text-xs text-black">{data?.partNameL1}</div>
                  </td>
                  <td className="p-1 border border-gray-200 max-w-md">
                    <div className="text-xs text-black">
                      {data?.psbuildingName}
                    </div>
                    <div className="text-xs text-black">
                      {data?.buildingAddress}
                    </div>
                  </td>
                  <td className="p-1 text-xs text-black text-center border border-gray-200">
                    {data?.partSerialNumber}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div className="overflow-x-auto shadow-md rounded-lg">Incorrect Inputs</div>
        )}
      </Boundary>
    </div>
  );
};

export default EpicResult;
