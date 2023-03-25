package com.practice.demo.service;



import com.practice.demo.entity.Contract;
import com.practice.demo.repository.ContractRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ContractServiceImpl implements ContractService
{
    @Autowired
    private ContractRepository contractRepository;


    @Override
    public Contract addContract( Contract contract )
    {
        return contractRepository.save( contract );
    }

    @Override
    public List<Contract> getContracts()
    {
        return contractRepository.findAll();
    }
}
