package com.chemshare.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.io.Serializable;
import java.util.List;

/**
 * A Compound.
 */
@Document(collection = "compound")
public class Compound implements Serializable {

    @Id
    private String id;

    private String name;

    @Field("structure")
    private String structure;

    @Field("university")
    private String university;

    @Field("price")
    private Integer price;

    @Field("unit")
    private String unit;

    @Field("user_id")
    private String userId;

    private String smile;

    private List<String> tags;

    @Field("enzyme_inhibitor")
    private String enzymeInhibitor;

    @Field("biological_activity")
    private String biologicalActivity;

    private String image;

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
        return price;
    }

    public void setPrice(Integer Price) {
        this.price = Price;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSmile() {
        return smile;
    }

    public void setSmile(String smile) {
        this.smile = smile;
    }

    public List<String> getTags() {
        return tags;
    }

    public void setTags(List<String> tags) {
        this.tags = tags;
    }

    public String getEnzymeInhibitor() {
        return enzymeInhibitor;
    }

    public void setEnzymeInhibitor(String enzymeInhibitor) {
        this.enzymeInhibitor = enzymeInhibitor;
    }

    public String getBiologicalActivity() {
        return biologicalActivity;
    }

    public void setBiologicalActivity(String biologicalActivity) {
        this.biologicalActivity = biologicalActivity;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
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
                ", Price='" + price + "'" +
                ", unit='" + unit + "'" +
                ", userId='" + userId + "'" +
                '}';
    }
}
