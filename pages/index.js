import { Button, Col, Divider, Input, Modal, Row, Space } from "antd";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  // dành cho việc mở đóng modal
  const [openModal, setOpenModal] = useState(false);
  // hook - móc
  const [job, setJob] = useState({
    title: "",
  });
  // job: biến lưu  trữ giá trị
  // setJob: hàm để cập nhật lại giá trị cho biến job
  const [jobList, setJobList] = useState([]);
  // B2
  const [jobEditValue, setJobEditValue] = useState();
  console.log(jobEditValue);

  // console.log(job);
  // console.log("danh sách", jobList);

  const addJob = () => {
    // console.log("thêm đi");
    const newJob = {
      title: job.title,
      status: "Đang làm",
    };
    // const cloneJobList = [...jobList];
    // cloneJobList.push(newJob);
    // setJobList(cloneJobList);

    setJobList((prev) => [...prev, newJob]);

    // prev => giá trị của state hiện tại (jobList)
    // => arr function
    // () : thay cho chữ return
    // [...prev]: tạo bản sao giống mảng prev
    // [...prev, newJob]: tạo bản sao giống prev và thêm vào 1 object newJob
  };

  const handleEditItemValueChange = (e) => {
    // Clone nó ra
    let cloneValue = { ...jobEditValue.value };
    // dựa vào name, value từ e để cập nhật lại giá trị cho cloneValue
    cloneValue[e.target.name] = e.target.value;
    // console.log(cloneValue);
    setJobEditValue((prev) => ({ ...prev, value: cloneValue }));
  };

  // map khác for và forEach là nó tạo ra 1 mảng mới dựa vào item được trả về sau mỗi vòng lặp
  const handleUpdateJobList = () => {
    setJobList((prev) => {
      // lặp qua các phần tử joblist hiện tại
      // dựa vào index của jobEditValue để cập lại giá trị cho item
      const newJobList = prev.map((item, i) => {
        if (i === jobEditValue.index) {
          return jobEditValue.value;
        } else {
          return item;
        }
      });
      // trả về mảng mới để setJobList cập nhật lại giá trị cho jobList
      return newJobList;
    });
  };

  return (
    <>
      <main>
        <Row justify="center" style={{ background: "black", padding: 16 }}>
          <Col
            span={12}
            style={{ background: "white", borderRadius: 16, padding: 16 }}
          >
            <Divider>TODO app</Divider>
            {/* Tạo cooong việc */}
            <Row gutter={[8, 0]}>
              <Col>
                <Input
                  name="jobTitle"
                  placeholder="Tiêu đề công việc"
                  onChange={(e) => {
                    setJob({
                      title: e.target.value,
                    });
                  }}
                />
              </Col>
              <Col>
                <Button type="primary" onClick={addJob}>
                  Thêm việc
                </Button>
              </Col>
            </Row>

            <Divider>Danh sách công việc</Divider>
            <Row gutter={[16, 16]} align="middle">
              <Col span={2}>STT</Col>
              <Col span={14}>Tên công việc</Col>
              <Col span={8}>Trạng thái</Col>
            </Row>
            {/* B1 */}
            {jobList.map((item, i) => {
              return (
                <Row key={i} gutter={[16, 16]} align="middle">
                  <Col span={2}>{i + 1}</Col>
                  <Col span={14}>{item.title}</Col>
                  <Col span={4}>{item.status}</Col>
                  {/* B4  */}
                  <Col span={4}>
                    <Button
                      onClick={() => {
                        setJobEditValue({
                          value: item,
                          index: i,
                        });
                        setOpenModal(true);
                      }}
                    >
                      Sửa
                    </Button>
                  </Col>
                </Row>
              );
            })}
          </Col>
        </Row>
        <Modal
          open={openModal}
          footer={null}
          title="Sửa job"
          onCancel={() => setOpenModal(false)}
        >
          {/* B5 */}
          <Space>
            Tiêu đề job
            <Input
              value={jobEditValue?.value?.title ?? ""}
              name="title"
              onChange={handleEditItemValueChange}
            />
            Trạng thái
            <Input
              value={jobEditValue?.value?.status ?? ""}
              name="status"
              onChange={handleEditItemValueChange}
            />
            <Button
              block
              type="primary"
              onClick={() => {
                // gọi hàm update
                handleUpdateJobList();
                // đóng modal
                setOpenModal(false);
              }}
            >
              Cập nhật
            </Button>
          </Space>
        </Modal>
      </main>
    </>
  );
}
