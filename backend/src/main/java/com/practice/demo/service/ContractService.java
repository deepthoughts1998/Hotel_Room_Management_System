package com.practice.demo.service;


import com.practice.demo.entity.Contract;

import java.util.List;

public interface ContractService
{

    Contract addContract( Contract contract );

    List<Contract> getContracts();
}
