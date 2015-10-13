package com.chemshare.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.io.Serializable;

/**
 * A Compound.
 */
@Document(collection = "T_COMPOUND")
public class Compound implements Serializable {

    @Id
    private String id;

    @Field("structure")
    private String structure;

    @Field("university")
    private String university;

    @Field("price")
    private Integer Price;

    @Field("unit")
    private String unit;

    @Field("user_id")
    private Integer userId;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getStructure() {
        return structure;
    }

    public void setStructure(String structure) {
        this.structure = structure;
    }

    public String getUniversity() {
        return university;
    }

    public void setUniversity(String university) {
        this.university = university;
    }

    public Integer getPrice() {
        return Price;
    }

    public void setPrice(Integer Price) {
        this.Price = Price;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        Compound compound = (Compound) o;

        if (id != null ? !id.equals(compound.id) : compound.id != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

    @Override
    public String toString() {
        return "Compound{" +
                "id=" + id +
                ", structure='" + structure + "'" +
                ", university='" + university + "'" +
                ", Price='" + Price + "'" +
                ", unit='" + unit + "'" +
                ", userId='" + userId + "'" +
                '}';
    }
}
