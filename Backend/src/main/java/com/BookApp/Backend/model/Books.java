package com.BookApp.Backend.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Books")
public class Books {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "Book_Name")
    private String bName;
    
    @Column(name = "Author_Name")
    private String aName;
    
    @Column(name = "Published_date")
    private String pDate;
    
    @Column(name = "Publisher_Name")
    private String pName;
    
    @Column(name = "Language")
    private String lang;
    
    @Column(name = "Book_Img")
    private String bImage;
    
    @Column(name = "Is_Fav")
    private boolean isFav=false;
    
    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL,mappedBy = "book")
    private List<Favourites> favourite;

	public Books(String bName,String bImg, String aName, String pDate, String pName, String lang) {
		super();
		this.bName = bName;
		this.aName = aName;
		this.pDate = pDate;
		this.pName = pName;
		this.lang = lang;
		this.bImage=bImg;
	}
    
//    @ManyToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name="A_id")
//    private Authors authors;
   
    
    

}
