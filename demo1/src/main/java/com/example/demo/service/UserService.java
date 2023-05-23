package com.example.demo.service;

import com.example.demo.api.model.User;
import org.springframework.stereotype.Service;

import java.sql.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static java.util.Arrays.asList;

@Service
public class UserService {
    private List<User> userList;
    public UserService(){
        userList=new ArrayList<>();
        User user1=new User(1,"mohammad",22,"hlhwlymhmd@gmail.com");
        User user2=new User(2,"mohammad",22,"hlhwlymhmd@gmail.com");
        User user3=new User(3,"mohammad",22,"hlhwlymhmd@gmail.com");
        User user4=new User(4,"mohammad",22,"hlhwlymhmd@gmail.com");
        userList.addAll(Arrays.asList(user3,user4,user1,user2));
    }
    public Optional<User> getUser(Integer id){
        Optional optional=Optional.empty();
        for (User user:userList) {
            if (id==user.getId()){
                optional=optional.of(user);
                return optional;
            }
        }
        return optional;
    }
}
